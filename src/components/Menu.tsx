export default function Menu() {
  return (
    <div className='flex gap-0.5 mt-2'>
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className='bg-black size-[3px] rounded-full'
        />
      ))}
    </div>
  )
}
