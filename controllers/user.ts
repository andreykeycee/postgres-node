import { UserModel } from '../models/User'

export const getUsers = async (): Promise<UserModel[]> => {
  return UserModel.findAll()
}

export const saveUser = async (name: string, email: string): Promise<UserModel> => {
  return UserModel.create({ name, email })
}

export const getUserById = async (id: number): Promise<UserModel> => {
  return UserModel.findByPk(id)
}