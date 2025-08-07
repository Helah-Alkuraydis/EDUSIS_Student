import Image from 'next/image';
import Link from 'next/link';


const Bills = () => {
    return (
        <div className="w-full flex flex-col gap-4 ">

            <div className="w-full flex items-center justify-between">
                <span className="text-(--graytext) font-semibold text-m">الفواتير</span>
                <Link href ="/list/bills" className="text-(--buttonColor) font-semibold text-m hover:bg-gray-500/10 rounded-2xl p-1 pr-2 pl-2" >عرض الكل</Link>
            </div>

            <div className=" flex items-center gap-4">
                <div className="flex flex-1 h-[200px] w-[200px] p-4 bg-white rounded-2xl justify-center items-center shadow-[8px_8px_48px_8px_rgba(0,0,0,0.08)]">
                    <div className="flex flex-col items-center justify-center gap-2 mt-8">
                        <Image src="/pic1.png" alt="" width={100} height={0} className='object-contain' />
                        <div className='flex flex-col gap-1 justify-center items-center'>
                            <div className="flex gap-1 items-center justify-center">
                                <span className="text-(--graytext) font-bold text-2xl  ">10,000 </span>
                                <Image src="/Saudi_Riyal_Symbol-2 1.png" alt="" width={16} height={15} className='object-contain' />
                            </div>
                            <span className="text-[#969696] font-semibold text-sm">إجمالي المستحقات</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-1 h-[200px] w-[200px] p-4 bg-white rounded-2xl justify-center items-center shadow-[8px_8px_48px_8px_rgba(0,0,0,0.08)]">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <Image src="/pic2.png" alt="" width={100} height={0} className='object-contain' />
                        <div className='flex flex-col gap-1 justify-center items-center'>
                            <div className="flex gap-1 items-center justify-center">
                                <span className="text-(--graytext) font-bold text-2xl  ">5,000 </span>
                                <Image src="/Saudi_Riyal_Symbol-2 1.png" alt="" width={16} height={15} className='object-contain' />
                            </div>
                            <span className="text-[#969696] font-semibold text-sm  ">إجمالي المدفوعات </span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-1 h-[200px] w-[200px] p-4 bg-white rounded-2xl justify-center items-center shadow-[8px_8px_48px_8px_rgba(0,0,0,0.08)]">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <Image src="/pic3.png" alt="" width={75} height={0} className='object-contain' />
                        <div className='flex flex-col gap-1 justify-center items-center'>
                            <div className="flex gap-1 items-center justify-center">
                                <span className="text-(--graytext) font-bold text-2xl  ">500 </span>
                                <Image src="/Saudi_Riyal_Symbol-2 1.png" alt="" width={16} height={15} className='object-contain' />
                            </div>
                            <span className="text-[#969696] font-semibold text-sm">غير ذلك</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Bills