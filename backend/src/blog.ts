import { Hono } from 'hono'
import { verify } from 'hono/jwt';

export const blog = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    },
    Variables:{
        userId : string,
        prisma: any
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
  
  blog.post('/', async (c) => {
    const userId = c.get('userId')
    const prisma = c.get('prisma')
    const body = await c.req.json();

    try{
      await prisma.Post.create({
        data:{
            title: body.title,
            content: body.content,
            authorId: userId
        }
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
    const prisma = c.get('prisma')
    const body = await c.req.json();
    const post_id = body.postId;
    const updates:any = {}

    if(body.title) updates.title = body.title
    if(body.content) updates.content = body.content

    try{
      await prisma.Post.update({
        where:{
          id : post_id
        },
        data : updates
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
  
  blog.get('/:id', async (c) => {
    const id = c.req.param('id');
    console.log(id)
    const prisma = c.get('prisma')

    try{
      const post = await prisma.Post.findFirst({
        where:{
          id
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
  
  blog.get('/post/bulk', async (c) => {
      const prisma = c.get('prisma')
      const posts = await prisma.Post.findMany()

      return c.json({
        posts
      })
  })