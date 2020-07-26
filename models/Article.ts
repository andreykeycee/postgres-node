import { ID } from './utils'
import { DataTypes, Model } from 'sequelize'
import { UserModel } from './User'
import { sequelize } from '../db'

export type _Article = ID & {
  author: number
  text: string
  likedBy: number[]
}

export class ArticleModel extends Model {}

ArticleModel.init({
  text: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'Article' })

ArticleModel.belongsTo(UserModel, {
  foreignKey: { allowNull: false, name: 'author' }
})
UserModel.hasMany(ArticleModel)

