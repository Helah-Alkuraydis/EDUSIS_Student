
import Menu from "@/components/Menu";
import TopBar from "@/components/TopBar";

export default function PortalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div className="h-screen flex gap-10 "> {/*bg-[#F7F8FA]*/}

      {/*RIGHT*/}
      <div className="w-[14%] bg-grad-vertical md:w-[8%] lg:w-[16%] xl:w-[14%]   h-screen">
        <Menu />
      </div>


      {/*LEFT*/}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] overflow-scroll flex flex-col p-5">
        <TopBar />
        <section className=" mt-10">
          {children}
        </section>
      </div>

      
    </div>

  );
}
