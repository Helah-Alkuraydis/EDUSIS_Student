"use client";


import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Search from '@/components/Search';
import Table from '@/components/Table';
import { assignments } from "@/lib/data";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  img: z.instanceof(File, { message: "Image is required" }),
});
type Inputs = z.infer<typeof schema>;

type record = {
  id: string;
  name: string;
  assignmentFor: string;
  assignType: string;
  issuedDate: string;
  submissionDate: string;
  state: string;
};

const columns = [

  {
    header: "المهمة",
    accessor: "name",
    className: "pr-3",
  },
  {
    header: "المقرر",
    accessor: "assignmentFor",
    className: "hidden md:table-cell",
  },
  {
    header: "نوع المهمة",
    accessor: "assignType",
    className: "hidden md:table-cell",
  },
  {
    header: "نهاية وقت التسليم",
    accessor: "issuedDate",
    className: "hidden md:table-cell",
  },
    {
    header: "وقت الرفع",
    accessor: "submissionDate",
    className: "hidden md:table-cell",
  },
    {
    header: "الحالة",
    accessor: "state",
    className: "hidden md:table-cell",
  },
  {
    header: "التفاصيل",
    accessor: "actions",
    className: "hidden md:table-cell",
  },

]
const Assignment = () => {
  const {
    register,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });
    const renderRow = (item: record) => (
        <tr
          key={item.id}
          className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
        >
          <td className="flex justify-start mb-4 mt-4 mr-4 text-(--graytext) font-medium">{item.name}</td>
          <td className="hidden md:table-cell text-(--graytext) font-medium">{item.assignmentFor}</td>
          <td className="hidden md:table-cell text-(--graytext) font-medium">{item.assignType}</td>
          <td className="hidden md:table-cell text-(--graytext) font-medium">{item.issuedDate}</td>
          <td className="hidden md:table-cell text-(--graytext) font-medium">{item.submissionDate}</td>
          <td className="hidden md:table-cell text-(--graytext) font-medium">{item.state}</td>
 <td>
                <div className="flex items-center gap-2">
                    {/* <Link href={`/list/newRegistration/${item.id}`}>  */}
                    <label  className="rounded-md p-1 text-white font-semibold flex items-center justify-center cursor-pointer bg-[#1786D9] " htmlFor="img">
                       <span>ارفاق</span> 
                    </label >
          <input type="file" id="img" {...register("img")} className="hidden" />
          {errors.img?.message && (
            <p className="text-xs text-red-400">
              {errors.img.message.toString()}
            </p>
          )}
        </div>
            </td>
        </tr>
      );
    


  return (
    <div className="bg-white  rounded-md flex-1 gap-8">
      {/* TOP */}
      <div className="flex-col items-center justify-between">
        <h1 className="hidden md:block text-xl text-[#0A4D7E]  font-semibold mb-5">تسجيل المواد</h1>
        <div className="flex flex-row justify-between w-full ">
          <div className="flex flex-col md:flex-row items-end gap-4 mb-10 w-full md:w-auto ">
            <Search />


            <div className="flex items-end gap-4 self-end text-(--graytext)">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium">ترتيب حسب:</label>
                <Select dir='rtl'>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="الفصل " />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup >
                      <SelectItem value="apple">الحالة</SelectItem>
                      
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <label className="text-sm font-medium">تصنيف حسب:</label>
                <Select dir='rtl'>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="افتراضي" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup >
                      <SelectItem value="apple">مشروع</SelectItem>
                      <SelectItem value="banana">اختبار</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

          </div>
        </div>

        <Table columns={columns} renderRow={renderRow} data={assignments} />

      </div>
    </div>
  )
}

export default Assignment 

function register(arg0: string): import("react").JSX.IntrinsicAttributes & import("react").ClassAttributes<HTMLInputElement> & import("react").InputHTMLAttributes<HTMLInputElement> {
    throw new Error("Function not implemented.");
}
