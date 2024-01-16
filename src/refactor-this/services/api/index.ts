import axios from 'axios'
import { BACKEND_URL } from '../../constants'

export const getImages = async (category?: string, page?: string) => {
  try {
    let url = `${BACKEND_URL}/images`

    if (category) {
      url += `?category=${category}`
    }

    if (page) {
      url += `${category ? '&' : '?'}page=${page}`
    }
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error('Error fetching images:', error)
    return []
  }
}
