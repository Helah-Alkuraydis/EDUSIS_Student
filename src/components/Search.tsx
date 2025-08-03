import Image from "next/image";

const SearchFilters = () => {
  return (
     <div className='hidden xl:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300  hover:bg-gray-500/10 px-2 focus-within:ring-(--buttonColor)'>
                <Image src="/search.png" alt="" width={14} height={14} />
                <input type="text" 
                placeholder="البحث..." 
                className="w-[300px] p-2 bg-transparent outline-none" />
              </div>
  );
};

export default SearchFilters;