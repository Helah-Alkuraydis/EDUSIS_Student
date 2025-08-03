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
      <div className="flex-1/4 md:w-[8%] lg:w-[16%] xl:w-[14%] ">{/*mt-21*/}
        <Menu />
      </div>


      {/*LEFT*/}
      <div className="flex-3/4 md:w-[92%] lg:w-[84%] xl:w-[86%] ">
        <TopBar />



        <section className=" mt-10">

          {children}
        </section>


        {/* <div className="flex w-full md:w-[92%] lg:w-[84%] xl:w-[86%] "> */}

      </div>
    </div>

    // </div>
  );
}
