import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import Provider from './configs/Provider'
import Main from './pages/Main'
import { useEffect } from 'react'
import queryClient from './api/client/queryClient'
import { fetchPosts } from './api/service/postService'

export default function App() {
  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ['posts'],
      queryFn: fetchPosts
    })
  }, [])
  return (
    <Provider>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Main />
      </HydrationBoundary>
    </Provider>
  )
}
