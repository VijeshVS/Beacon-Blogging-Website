import { Hono } from 'hono'
import { sign } from 'hono/jwt'
import {signUpInput,signInInput,signInType,signUpType} from '@vijeshvs/common2/dist/index'

export const user = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    },
    Variables:{
        prisma:any
    }
}>()

user.get('/healthy',(c)=>c.text("Server is healthy!!"))

user.post('/signup', async (c) => {
    const prisma = c.get('prisma')
    const body = await c.req.json();

    const newUser:signUpType = {
      name: body.name,
      email: body.email,
      password: body.password
    }

    const validate = signUpInput.safeParse(newUser)

    if(!validate.success){
      c.status(411)
      return c.json({
        msg : "Incorrect Inputs!!"
      })
    }
  
    try{
      const user = await prisma.user.create({
        data: newUser
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

    const newUser:signInType = {
      email : body.email,
      password : body.password
    } 

    const validate = signInInput.safeParse(newUser);

    if(!validate.success){
      c.status(411)
      return c.json({
        msg: "Invalid Inputs!!"
      })
    }
   
    try{
      const user = await prisma.user.findFirst({
        where: newUser
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