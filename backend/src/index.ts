import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { user } from '../routes/user'
import { blog } from '../routes/blog'

type Bindings = {
  DATABASE_URL : string,
  JWT_SECRET: string
}

type Variables = {
  userId : string,
  prisma : any
}

const app = new Hono<{
  Bindings : Bindings,
  Variables : Variables
}>()

app.use('*', async (c,next) => {
	const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  c.set('prisma', prisma);
  await next();
})

app.route('/api/v1/user',user);
app.route('/api/v1/blog',blog)




export default app
