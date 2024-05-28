import { TComment } from '@/types'
import requests from '../client/http'

export const fetchComments = async (postId: number): Promise<TComment[]> => {
  const response = await requests.get(`/comments?postId=${postId}`)
  return response
}
