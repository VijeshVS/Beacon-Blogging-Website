import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {sign,decode,verify} from 'hono/jwt'

const app = new Hono<{
  Bindings : {
    DATABASE_URL : string,
    JWT_SECRET: string
  },
  Variables: {
    userId : string,
    prisma : any
  }
}>()

app.use('*', async (c,next) => {
	const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  c.set('prisma', prisma);

  await next();
})

app.use('/api/v1/blog/*', async(c,next)=>{
  const token_header = c.req.header('authorization') || "no user";
  const token = token_header.split(' ')[1];

  try{
    const user = await verify(token,c.env.JWT_SECRET);
    c.set("userId",user.id) // later get it by c.get
    await next();
  }
  catch(e){
    c.status(403)
    return c.json({
      msg:"User is not authenticated",
    })
  }
  
})

app.post('/api/v1/user/signup', async (c) => {
  const prisma = c.get('prisma')

  const body = await c.req.json();

  try{
    const user = await prisma.user.create({
      data:{
        name: body.name,
        email: body.email,
        password: body.password
      }
    })

    const token = await sign({id :user.id},c.env.JWT_SECRET)
      
    return c.json({
      token
    })

  }
  catch(e){
    return c.json({
      msg : "Error while signing up"
    })
  }

  
})

app.post('/api/v1/user/signin', async (c) => {
  const prisma = c.get('prisma')

  const body = await c.req.json();

  try{
    const user:any = await prisma.user.findFirst({
      where:{
        name : body.name,
        password: body.password
      }
    })
    const token = await sign({id:user.id},c.env.JWT_SECRET)
    return c.json({
      token
    })
  }
  catch(e){
    return c.json({
      msg:"Error while signing in"
    })
  }
})

app.post('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.put('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/v1/blog/:id', (c) => {
  const id = c.req.param;

  return c.text('Hello Hono!')
})

app.get('/api/v1/blog/bulk', (c) => {
  return c.text('Hello Hono!')
})

export default app
