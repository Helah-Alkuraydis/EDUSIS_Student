import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import LeftSide from "@/components/LeftSide";
import TopBar from "@/components/TopBar";

export default function PortalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div className="h-screen flex">
      
      {/*RIGHT*/}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] ml-4">{/*mt-21*/ }
       <Menu />
      {/* <TopBar /> */}

      </div>


      {/*LEFT*/}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] mt-21 ">
        <div className=" flex  gap-20 justify-between rounded-2xl bg-grad-horizontal ml-4 ">
          <div className="flex flex-col justify-end p-4">

            <span className='text-graylight text-sm mr-4 '> 4 يوليو ، 2025  </span>
            <h3 className='text-graylight font-semibold mr-4 mt-6 text-xl'>صباح الخير، </h3>
            <div className=" flex gap-2 w-fit">
              <span className='text-white text-3xl font-medium mr-4 '>شهد</span>
              <Image src="/sunEmoji.png" alt="" width={30} height={30} className="object-contain" />
            </div>

          </div>
          <div className="flex justify-start">
            <Image src="/person.png" alt="" width={295} height={200} className="object-contain" />
          </div>

        </div>

        <div className="w-full flex justify-between items-start mt-8">



          {/* 👉 اليمين: المحتوى الأساسي (الداشبورد مثلًا) */}
          <section className="w-[75%]flex justify-start items-start ">

            {children}
          </section>
          {/* 👈 يسار: التقويم والفعاليات */}
          <section className="w-[25%] flex justify-end ml-4 ">
            <LeftSide />
          </section>

          {/* <div className="flex w-full md:w-[92%] lg:w-[84%] xl:w-[86%] "> */}

        </div>
      </div>
    </div>

    // </div>
  );
}
