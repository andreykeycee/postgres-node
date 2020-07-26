import { Arg, Field, Mutation, ObjectType, Resolver, Query } from 'type-graphql'
import { _Article } from '../models/Article'
import { saveArticle, likeArticle, getArticle } from '../controllers/articles'


@ObjectType()
export class Article implements _Article {
  @Field()
  id: number

  @Field()
  author: number

  @Field()
  text: string

  @Field(returns => [String])
  likedBy: number[]
}

@Resolver()
export class ArticleResolvers {
  @Query(returns => Article)
  async article (@Arg('id') id: number) {
    return getArticle(id)
  }

  @Mutation(returns => Article)
  async saveArticle (
    @Arg('author') author: number,
    @Arg('text') text: string
  ) {
    return saveArticle(author, text)
  }

  @Mutation(returns => Article)
  async likeArticle (
    @Arg('user') user: number,
    @Arg('article') article: number
  ) {
    return likeArticle(user, article)
  }
}