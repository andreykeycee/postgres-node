import Koa from 'koa'
import { ApolloServer } from 'apollo-server-koa'
import cors from '@koa/cors'
import 'reflect-metadata'

import { buildSchema } from 'type-graphql'
import { connectToDB } from './db'
import { UserResolvers } from './api/users'
import { ArticleResolvers } from './api/articles'

const app = new Koa()

app.use(cors())

connectToDB().then(async () => {
  const port = 3003
  const schema = await buildSchema({
    resolvers: [ UserResolvers, ArticleResolvers ]
  })

  const server = new ApolloServer({
    schema,
    introspection: true,
    tracing: true
  })

  app.listen({ port }, () => {
    console.log(`🚀 server is running on http://localhost:${port}/api/graphql`)
  })

  server.applyMiddleware({ app, path: `/api${server.graphqlPath}` })
})

