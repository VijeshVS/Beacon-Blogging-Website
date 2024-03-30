import { Hono } from 'hono'
import { verify } from 'hono/jwt';

export const blog = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    },
    Variables:{
        userId : string
    }
}>();

  blog.use('*', async(c,next)=>{
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
  
  blog.post('/', (c) => {
    return c.text('Hello Hono!')
  })
  
  blog.put('/', (c) => {
    return c.text('Hello Hono!')
  })
  
  blog.get('/:id', (c) => {
    const id = c.req.param;
  
    return c.text('Hello Hono!')
  })
  
  blog.get('/bulk', (c) => {
    return c.text('Hello Hono!')
  })