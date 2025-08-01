import {
  LayoutDashboard, UserPen, SquarePen,
  BookText,
  BookPlus,
  BookCheck,
  FileBadge,
  SquareLibrary,
  Info,
  LogOut,
  User
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from "@/components/ui/input"


const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: LayoutDashboard,
        label: "الصفحة الرئيسية",
        href: "/",
      },

      {
        icon: SquarePen,
        label: "تسجيل المواد",
        href: "/subjectsRegistration",
      },
      {
        icon: BookText,
        label: "المقررات",
        href: "/courses",
      },
      {
        icon: BookPlus,
        label: "تسجيل جديد",
        href: "/newRegistration",
      },
      {
        icon: BookCheck,
        label: "نتائج المقررات",
        href: "/Exams",
      },
      {
        icon: FileBadge,
        label: "السجل الأكاديمي",
        href: "/gradesBook",
      },
      {
        icon: SquareLibrary,
        label: "جدول المحاضرات",
        href: "/timeTable",
      },
    ],
  },
  {
    title: "",
    items: [
      {
        icon: UserPen,
        label: "الملف الشخصي",
        href: "/profile",
      },
      {
        icon: Info,
        label: "المساعدة",
        href: "/help",
      },
      {
        icon: LogOut,
        label: "تسجيل الخروج",
        href: "/logout",
      }


    ]
  },

]
const Menu = () => {
  return (

    <div className=" w-fit h-screen pb-5 mr-4 ">

      {/*SIDEBAR*/}


      <div className='h-screen w-fit p-5 rounded-xl bg-grad-vertical flex flex-col '>
        <Link href="/" className="flex mt-2 mr-2 ml-2 items-center justify-center shrink">
          <Image src="/logo.png" alt='logo' width={132} height={132} />
        </Link>

        <div className="mt-2 text-sm ">
          {menuItems.map(i => (
            <div className="flex flex-col py-5 " key={i.title}>
              <span className=' hidden'>{i.title}</span>
              {i.items.map(item => (
                <Link href={item.href} key={item.label} className="flex items-center justify-center lg:justify-start gap-2 mb-4 text-(--graylight) hover:bg-white/10 rounded-md p-2">
                  <item.icon width={20} height={20} className=' shrink-0' />
                  <span className='hidden lg:block'>
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          ))}</div>

      </div>


    </div>



  )
}

export default Menu