import Link from "next/link";
import Image from "next/image";

export default function PortalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 
    <div className= "h-screen flex">
      {/*LEFT*/}
      <div className="w-5/6 md:w-[92%] lg:w-[84%] xl:w-[86%]  bg-blue-200">
    l
      </div>

      {/*RIGHT*/}
      <div className="w-1/6 md:w-[8%] lg:w-[16%] xl:w-[14%] bg-blue-300">
      <Link href="/" className="m-2 h-1/3 justify-center " >
      <Image src="/logo.png" alt='logo' width={132} height={132}/>
      </Link>
      </div>
    </div>
  );
}
