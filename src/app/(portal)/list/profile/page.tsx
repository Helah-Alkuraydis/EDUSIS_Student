const Profile = () => {
    return (
        <div className="bg-white rounded-md flex-1  gap-8">
            <div className="flex items-center justify-between mb-5">
                <h1 className="hidden md:block text-xl text-[#0A4D7E]  font-semibold mb-5">الملف الشخصي</h1>
            </div>

            <div className="flex flex-col md:flex-col items-start gap-5 w-full md:w-auto">
                <h1 className="hidden md:block text-lg font-semibold">شهد عبدالرحمن النويصر</h1>
                <div className="flex gap-30 mb-5">
                    <div className="flex flex-col items-start justify-center gap-2" >
                        <h1 className="hidden md:block text-m text-(--graytext) font-semibold">البريد الإلكتروني</h1>
                        <input
                            type="text"
                            min={0}
                            max={30}
                            step={1}
                            defaultValue={"student@openeducat.com"}
                            disabled={true} 
                            className=" max-w-s outline-none pt-1.5 pb-1.5 pl-4 pr-3 bg-[#F2F2F2] w-[270px] ring-1 rounded-md ring-black text-gray-600 font-medium" //border-1 border-black ring-[1.5px] ring-gray-300  hover:bg-gray-500/10 px-2 focus-within:ring-(--buttonColor)
                        />
                    </div>

                     <div className="flex flex-col items-start justify-center gap-2" >
                        <h1 className="hidden md:block text-m text-(--graytext) font-semibold">تاريخ الميلاد</h1>
                        <input
                            type="text"
                            min={0}
                            max={30}
                            step={1}
                            defaultValue={"03/01/2000"}
                            disabled={true} 
                            className=" max-w-s outline-none pt-1.5 pb-1.5 pl-4 pr-3 bg-[#F2F2F2] w-[270px] ring-1 rounded-md ring-black text-gray-600 font-medium" //border-1 border-black ring-[1.5px] ring-gray-300  hover:bg-gray-500/10 px-2 focus-within:ring-(--buttonColor)
                        />
                    </div>
                </div>

                 <div className="flex gap-30 mb-10">
                    <div className="flex flex-col items-start justify-center gap-2" >
                        <h1 className="hidden md:block text-m text-(--graytext) font-semibold">الجنس</h1>
                        <input
                            type="text"
                            min={0}
                            max={30}
                            step={1}
                            defaultValue={"أنثى"}
                            disabled={true} 
                            className=" max-w-s outline-none pt-1.5 pb-1.5 pl-4 pr-3 bg-[#F2F2F2] w-[270px] ring-1 rounded-md ring-black text-gray-600 font-medium" //border-1 border-black ring-[1.5px] ring-gray-300  hover:bg-gray-500/10 px-2 focus-within:ring-(--buttonColor)
                        />
                    </div>

                      <div className="flex flex-col items-start justify-center gap-2" >
                        <h1 className="hidden md:block text-m text-(--graytext) font-semibold">العنوان</h1>
                        <input
                            type="text"
                            min={0}
                            max={30}
                            step={1}
                            defaultValue={"القصيم"}
                            disabled={true} 
                            className=" max-w-s outline-none pt-1.5 pb-1.5 pl-4 pr-3 bg-[#F2F2F2] w-[270px] ring-1 rounded-md ring-black text-gray-600 font-medium" //border-1 border-black ring-[1.5px] ring-gray-300  hover:bg-gray-500/10 px-2 focus-within:ring-(--buttonColor)
                        />
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Profile