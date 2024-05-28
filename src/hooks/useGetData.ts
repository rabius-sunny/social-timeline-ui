import { useQuery } from '@tanstack/react-query'
import { fetchPosts } from '../api/service/postService'
import { fetchComments } from '@/api/service/commentService'

export function useGetPosts() {
  return useQuery({
    queryFn: async () => fetchPosts(),
    queryKey: ['posts']
  })
}

export function useGetComments(id: number, enabled: boolean) {
  return useQuery({
    queryKey: ['comments', id],
    queryFn: async () => fetchComments(id),
    enabled
  })
}
