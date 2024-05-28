export default function PostSkeleton({ count = 5 }) {
  return (
    <div className='grid gap-3'>
      {Array.from({ length: count }, (_, i) => i + 1).map((n) => (
        <div
          key={n}
          className='w-full bg-white/50 h-52 rounded-lg p-3'
        >
          <div className='size-10 rounded-full animate-pulse bg-slate-300' />
          <div className='h-4 mt-4 rounded animate-pulse bg-slate-300' />
          <div className='h-4 mt-4 rounded animate-pulse bg-slate-300' />
          <div className='h-4 mt-4 rounded animate-pulse bg-slate-300' />
          <div className='h-4 mt-4 rounded animate-pulse bg-slate-300' />
        </div>
      ))}
    </div>
  )
}
