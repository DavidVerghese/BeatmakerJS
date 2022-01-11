import api from './apiConfig'

export const getComments = async () => {
  try {
      const response = await api.get(`/comments`)
      return response.data
  } catch (error) {
      throw error
  }
}