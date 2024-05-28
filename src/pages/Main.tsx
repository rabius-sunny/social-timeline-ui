import Layout from '@/components/Layout'
import Post from '@/components/Post'
import PostSkeleton from '@/components/skeleton/PostSkeleton'
import { useGetPosts } from '@/hooks/useGetData'

export default function Main() {
  const { data, isLoading } = useGetPosts()

  return (
    <Layout>
      <div className='container'>
        <div className='grid gap-3'>
          {isLoading && !data && <PostSkeleton />}
          {data?.map((post, idx) => (
            <Post
              post={post}
              key={idx}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}
