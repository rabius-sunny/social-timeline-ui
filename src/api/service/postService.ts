import { TPost } from '../../types'
import requests from '../client/http'

export const fetchPosts = async (): Promise<TPost[]> => {
  const response = await requests.get('/posts')
  return response.slice(0, 10).sort((a: TPost, b: TPost) => b.id - a.id)
}
