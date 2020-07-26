import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../db'
import { ID } from './utils'

export type _User = ID & {
  name: string
  email: string
}

export class UserModel extends Model {}

UserModel.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'User' })