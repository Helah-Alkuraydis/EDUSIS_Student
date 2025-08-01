
import Image from 'next/image';

const TopBar = () => {
  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex items-center gap-6 justify-start h-16 mt-5 mr-5 bg-white ">
     
      <div className="flex items-center gap-19 justify-start w-screen  mb-6">
        <div className='gap-6 flex'>

       
        <div className='flex items-center gap-2'>
          <Image src="/avatar.png" alt="" width={38} height={38}
            className="rounded-full outline-2  outline-sky-600 shadow-[8px_8px_48px_8px_rgba(0,0,0,0.24)]  " />
          <div className='flex flex-col items-start mr-1'>
            <span className='text-l font-semibold text-(--graytext)'>شهد</span>
            <span className='text-xs font-normal text-gray-500'>السنة الثالثة</span>
          </div>
        </div>

        <div className='bg-white rounded-md w-10 h-10 flex items-center justify-center cursor-pointer  hover:bg-gray-500/10'>
          <Image src="/bell.png" alt="" width={20} height={20} />
        </div>

       
     </div>
       <div className='hidden xl:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300  hover:bg-gray-500/10 px-2'>
            <Image src="/search.png" alt="" width={14} height={14} />
            <input type="text" placeholder="البحث..." className="w-[300px] p-2 bg-transparent outline-none" />
          </div>
      </div>
</div>

  )
}

export default TopBar