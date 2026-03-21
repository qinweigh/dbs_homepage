import api from './index'

export const fetchVisitors = async () => {
  try {
    const response = await api.get('/v1/visitors')
    return response.data
  } catch (error) {
    console.warn('API fetch for visitors failed.', error)
    return { count: 0 }
  }
}
