import { Hono } from 'hono'
import { sign } from 'hono/jwt'
import { signUpInput,signInInput,signInType,signUpType,UserUpdateInput,UserUpdateType } from '@vijeshvs/common2/dist/index'
import {verify} from 'hono/jwt'

export const user = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    },
    Variables:{
        prisma:any,
        userId : string
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
    
      const user = await prisma.user.findFirst({
        where: newUser
      })

      if(!user){
        c.status(403)
        return c.json({
          msg:"Error while signing in"
        })
      }

      const token = await sign({id:user.id},c.env.JWT_SECRET)
      return c.json({
        token
      })
})

 user.post('/update',async (c)=>{
    const prisma = c.get('prisma')
    const body = await c.req.json();

    const UserData:UserUpdateType = {
      name:body.name,
      email:body.email,
      description:body.description,
      imgLink : body.imgLink
    }

    const validate = UserUpdateInput.safeParse(UserData)

    if(!validate.success){
      c.status(411)
      return c.json({
        msg : "Invalid inputs"
      })
    }

    const token_header = c.req.header('authorization') || "no user";
    const token = token_header.split(' ')[1];

    try{
      const user = await verify(token,c.env.JWT_SECRET);
      c.set("userId",user.id)

      await prisma.user.update({
        where: {
          id : user.id,
          password : body.password
        },
        data : UserData
      })

      return c.json({
        msg: "User updated successfully!!"
      })

    }
    catch(e){
      c.status(403)
      return c.json({
        msg:"User is not authenticated",
      })
    }

 })

 user.get('/isLoggedIn',async (c)=>{
  const prisma = c.get('prisma')
  const token_header = c.req.header('authorization') || "no user";
  const token = token_header.split(' ')[1];

    try{
      const user = await verify(token,c.env.JWT_SECRET);

      c.set("userId",user.id)

      const res = await prisma.user.findFirst({
        where: {
          id : user.id
        }
      })
      if(!res){
        c.status(203)
        return c.json({
          msg:"User not logged in!!"
        })
      }
    }
    catch(e){
      c.status(203)
      return c.json({
        msg: "User not logged in"
      })
    }
    
    return c.json({
      msg: "User already logged in!!"
    })
 })

 user.get('/',async (c)=>{
    const prisma = c.get('prisma')
    const token_header = c.req.header('authorization') || "no user";
    const token = token_header.split(' ')[1];

    try{
      const user = await verify(token,c.env.JWT_SECRET);
      c.set("userId",user.id)

      const userFound = await prisma.user.findFirst({
        where: {
          id : user.id
        }
      })

      return c.json({
        name: userFound.name,
        email : userFound.email,
        imgLink : userFound.imgLink
      })

    }
    catch(e){
      c.status(403)
      return c.json({
        msg:"User is not authenticated",
      })
    }
 })

