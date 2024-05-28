export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-bg h-screen overflow-auto from-slate-50 to-slate-500 bg-gradient-to-b'>
      <div className='lg:grid lg:grid-cols-12 gap-8'>
        <div className='col-span-3 hidden lg:block'>
          <div className='bg-white/30 shadow-black/20 shadow-lg size-full ' />
        </div>

        <div className='col-span-6 py-10'>{children}</div>
        <div className='col-span-3 hidden lg:block'>
          <div className='bg-white/30 shadow-black/20 shadow-lg size-full ' />
        </div>
      </div>
    </div>
  )
}
