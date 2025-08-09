"use client"
import {
  LayoutDashboard, UserPen, SquarePen,
  BookText,
  BookPlus,
  BookCheck,
  FileBadge,
  SquareLibrary,
  Info,
  LogOut,
  User,
  ChevronDown, ChevronUp, 
  School,
  BanknoteArrowDown
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from "@/components/ui/input"
import { useState } from "react";
import { usePathname } from "next/navigation"; 


const menuItems = [
  {
    title: "الرئيسية",
    items: [
      {
        icon: LayoutDashboard,
        label: "الصفحة الرئيسية",
        href: "/student",
      },
      {
        icon: BookPlus,
        label: "تسجيل المواد",
        href: "/list/subjectsRegistration",
      },
      // {
      //   icon: SquarePen,
      //   label: "تسجيل المواد",
      //   href: "/list/subjectsRegistration",
      // },
      {
        icon: BookText,
        label: "المقررات",
        href: "/list/courses",
      },

      {
        icon: BookCheck,
        label: "نتائج المقررات",
        href: "/list/examsResults",
      },
      {
        icon: FileBadge,
        label: "السجل الأكاديمي",
        href: "/list/gradesBook",
      },
      {
        icon: SquareLibrary,
        label: "جدول المحاضرات",
        href: "/list/timeTable",
      },
         {
        icon: School,
        label: "المهام والوجبات",
        href: "/list/assignment ",
      }
    ],
  },
{
  title: "",
    items: [
      {
        icon: BanknoteArrowDown,
        label: "الفواتير",
        href: "/list/bills",
      },
       {
        icon: UserPen,
        label: "الملف الشخصي",
        href: "/list/profile",
      },
      {
        icon: Info,
        label: "المساعدة",
        href: "/help",
      },
      {
        icon: LogOut,
        label: "تسجيل الخروج",
        href: "/",
      }

      

    ]
},

]
const Menu = () => {
  const pathname = usePathname(); // ✅ يعطيك المسار الحالي
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggle = (label: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };
  return (

    <div className=" h-screen overflow-y-auto"> {/*pb-5 */}

      {/*SIDEBAR*/}

      <div className='p-3'> {/*h-fit  rounded-xl*/}
        <div className='flex flex-col'>
          <Link href="/" className="flex mt-2 mr-2 ml-2 items-center justify-center shrink">
            <Image src="/logo.png" alt='logo' width={132} height={132} />
          </Link>

          <div className="mt-2 text-sm">
            {menuItems.map(i => (
              <div className="flex flex-col py-5 " key={i.title}>
                <span className=' hidden'>{i.title}</span>
               {i.items.map(item => {
                  const isActive = pathname === item.href; // ✅ فحص إذا الرابط الحالي هو نفسه

                  return (
                    <Link
                      href={item.href}
                      key={item.label}
                      className={`flex items-center justify-center lg:justify-start gap-2 mb-4 rounded-md p-2 transition-colors
                        ${isActive ? " text-white" : "text-(--graylight) hover:bg-white/10"}`}
                    >
                      <item.icon
                        width={20}
                        height={20}
                        className={`shrink-0 ${isActive ? "text-white" : ""}`}
                      />
                      <span className='hidden lg:block'>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            ))}</div>

        </div>
      </div>



    </div>


  )
}

export default Menu