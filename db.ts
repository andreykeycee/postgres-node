import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(
  'test',
  'me',
  '1111',
  { dialect: 'postgres' }
)

export const connectToDB = async () => {
  await sequelize.sync({ force: true })
  console.info('database synchronized')
}