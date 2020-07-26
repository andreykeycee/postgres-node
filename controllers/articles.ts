import { ArticleModel } from '../models/Article'
import { Like } from '../models/Like'

export const saveArticle = async (
  author: number,
  text: string
): Promise<ArticleModel> => {
  return ArticleModel.create({ author, text })
}

export const likeArticle = (
  authorId: number,
  articleId: number
): Promise<ArticleModel> => {
  return Like.create({ authorId, articleId })
}

export const getArticle = (id: number): Promise<ArticleModel> => {
  return ArticleModel.findByPk(id)
}