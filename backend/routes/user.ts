import { Hono } from 'hono'
import { sign } from 'hono/jwt'

export const user = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    },
    Variables:{
        prisma:any
    }
}>()

user.get('/test',(c)=>c.text("hello world"))

user.post('/signup', async (c) => {
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
  
  user.post('/signin', async (c) => {
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