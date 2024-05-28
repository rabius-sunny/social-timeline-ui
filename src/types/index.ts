export type TPost = {
  id: number
  title: string
  body: string
}
export type TComment = {
  id: number
  postId: number
  body: string
}
export type TUser = {
  id: number
  name: string
}

export type TApiResponse<T> = {
  data: T
  error?: string
}
