import api from './apiConfig'

export const getComments = async () => {
  try {
      const response = await api.get(`/comments`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createComment = async content => {
  try {
    const comment = { comment: content }
      const response = await api.post('/comments', comment)
      return response.data
  } catch (error) {
      throw error
  }
}