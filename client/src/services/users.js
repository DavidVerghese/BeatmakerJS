import api from './apiConfig'
import jwtDecode from 'jwt-decode'

export const getUser = async id => {
  try {
      const response = await api.get(`/users/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const signUp = async credentials => {
  try {
        const form = { user: { ...credentials } }
        const resp = await api.post('/users', form)
        localStorage.setItem('token', resp.data.token)
        const user = jwtDecode(resp.data.token)
        return user
    } catch (error) {
        throw error
    }
}

export const signIn = async credentials => {
  try {
      const form = { authentication: { ...credentials } }
        const resp = await api.post('/auth/login', form)
        localStorage.setItem('token', resp.data.token)
        const user = jwtDecode(resp.data.token)
        return user
    } catch (error) {
        throw error
    }
}

export const signOut = async user => {
    try {
        localStorage.clear()
        return true
    } catch (error) {
        throw error
    }
}

export const changePassword = async (passwords, user) => {
    try {
        const resp = await api.post('/')
        return resp.data
    } catch (error) {
        throw error
    }
}

export const verifyUser = async () => {
    const token = localStorage.getItem('token')
    if (token) {
        const res = await api.get('/verify')
        return res.data
    }
    return false
}