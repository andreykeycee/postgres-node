import { Arg, Field, Mutation, ObjectType, Query, Resolver } from 'type-graphql'
import { _User } from '../models/User'
import { getUserById, getUsers, saveUser } from '../controllers/user'

@ObjectType()
export class User implements _User {
  @Field()
  id: number

  @Field()
  name: string

  @Field()
  email: string
}

@Resolver()
export class UserResolvers {
  @Query(returns => [User])
  async users (): Promise<any[]> {
    return getUsers()
  }

  @Query(returns => User)
  async user (@Arg('id') id: number) {
    return getUserById(id)
  }

  @Mutation(returns => User)
  async saveUser (
    @Arg('name') name: string,
    @Arg('email') email: string
  ) {
    return saveUser(name, email)
  }
}