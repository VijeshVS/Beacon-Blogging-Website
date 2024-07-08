import { Hono } from 'hono'
import { verify } from 'hono/jwt';
import { createPostInput, createPostType,updatePostInput,updatePostType } from '@vijeshvs/common2/dist';
import { PrismaClient } from '@prisma/client/extension';
import { prisma } from '../src/db';

export const blog = new Hono<{
    Bindings:{
        JWT_SECRET:string
    },
    Variables:{
        userId : string,
        prisma: PrismaClient
    }
}>();

blog.get('/:id', async (c) => {
  const id = c.req.param('id');
  console.log(id)

  try{
    const post = await prisma.Post.findFirst({
      where:{
        id
      },
      include:{
        author: true
      }
    })
    return c.json({
      post
    })
  }
  catch(e){
    return c.json({
      msg:"Error while fetching the post"
    })
  }
})


  blog.use('*', async(c,next)=>{
    const token_header = c.req.header('authorization') || "no user";
    const token = token_header.split(' ')[1];
    
    if(c.req.path == "/api/v1/blog/post/bulk"){
      await next();
    }

    try{
      const user = await verify(token,c.env.JWT_SECRET);
      c.set("userId",user.id) 
      await next();
    }
    catch(e){
      c.status(403)
      return c.json({
        msg:"User is not authenticated",
        bruh : c.req.path
      })
    }
  })
  
  blog.post('/', async (c) => {
    const userId = c.get('userId')
    const body = await c.req.json();

    let date = new Date(Date.now());
    var Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 
    'October', 'November', 'December']
    const dateCreated = date.getDay() + " " + Months[date.getMonth()] + " " + date.getFullYear()

    const post:createPostType = {
        title: body.title,
        content: body.content,
        authorId: userId,
        description : body.description,
        created : dateCreated
    }

    const validate = createPostInput.safeParse(post)

    if(!validate.success){
      c.status(411)
      return c.json({
        msg : "Invalid Inputs"
      })
    }

    try{
      await prisma.Post.create({
        data: post
      })

      return c.json({
        msg : "Blog created successfully"
      })
    }catch(e){
      console.log(e)
      return c.json({
        msg: "error while adding blog"
      })
    }
    
  })
  
  blog.put('/', async (c) => {
    const body = await c.req.json();
    const post_id = body.postId;
    
    const updatePost:updatePostType = {
        title : body.title,
        content : body.content,
        description : body.description
    } 

    const validate = updatePostInput.safeParse(updatePost)

    if(!validate.success){
      c.status(411)
      return c.json({
        msg : "Invalid Inputs"
      })
    }

    try{
      await prisma.Post.update({
        where:{
          id : post_id
        },
        data : updatePost
      })

      return c.json({
        msg : "Successfully updated the post"
      })
    }
    catch(e){
      console.log(e)
      return c.json({
        msg : "Error while updating the post"
      })
    }
  })
  
  blog.get('/post/bulk', async (c) => {
      const posts = await prisma.Post.findMany({
        include:{
          author : true
        }
      })
      c.status(200)

      return c.json({
        posts
      })
  })

