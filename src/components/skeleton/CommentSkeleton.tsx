export default function CommentSkeleton({ count = 5 }) {
  return (
    <div className='grid gap-3'>
      {Array.from({ length: count }, (_, i) => i + 1).map((n) => (
        <div
          key={n}
          className='flex items-start gap-2'
        >
          <div>
            <div className='size-10 rounded-full animate-pulse bg-slate-300' />
          </div>
          <div className='w-full h-32 bg-slate-50 rounded-xl p-2'>
            <div className='bg-slate-300 animate-pulse rounded-lg w-40 h-3' />
            <div className='bg-slate-300 animate-pulse rounded-lg w-full h-20 mt-2' />
            <div />
          </div>
        </div>
      ))}
    </div>
  )
}
