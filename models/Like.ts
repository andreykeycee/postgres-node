import { UserModel } from './User'
import { ArticleModel } from './Article'
import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../db'

export class Like extends Model {}

Like.init({
  authorId: {
    type: DataTypes.INTEGER,
    references: {
      model: UserModel, // 'Movies' would also work
      key: 'id'
    }
  },
  articleId: {
    type: DataTypes.INTEGER,
    references: {
      model: ArticleModel, // 'Movies' would also work
      key: 'id'
    }
  }
}, { sequelize, modelName: 'Like' })

ArticleModel.belongsToMany(UserModel, { through: Like })
UserModel.belongsToMany(ArticleModel, { through: Like })