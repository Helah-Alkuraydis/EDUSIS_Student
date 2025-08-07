"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";


const schema = z
.object({

    course: z.enum(["الأعمال", "المحاسبة"], { message: "الرجاء اختيار التخصص" }),
    batch: z.enum(["الفصل 1", "الفصل 2"], { message: "الرجاء اختيار المسار" }),
     minLoad: z
      .coerce
      .number("الرجاء إدخال رقم" )
      .min(12, { message: "الحد الأدنى يجب أن يكون 12 أو أكثر" }),
    maxLoad: z
      .coerce
      .number("الرجاء إدخال رقم" )
      .max(24, { message: "الحد الأعلى يجب أن يكون 24 أو أقل" }),
    subject: z.enum(["محاسبة 1", "محاسبة 2"], { message: "الرجاء اختيار المقرر" }),
  })
  .refine((data) => data.minLoad <= data.maxLoad, {
    path: ["maxLoad"],
    message: "الحد الأعلى يجب أن يكون أكبر من أو يساوي الحد الأدنى",
  });

// type Inputs = z.infer<typeof schema>;

const StudentForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });

    return (
        <form className="flex-col xl: bg-white p-4 rounded-md flex-1 m-4 mt-0 gap-8 " onSubmit={onSubmit}>
            {/* TOP */}
            <h1 className="hidden md:block text-xl text-[#0A4D7E]  font-semibold mb-5">تسجيل جديد</h1>
            <div className="flex flex-col md:flex-col items-start justify-start gap-10 w-full md:w-auto">


                <div className="flex gap-30">
                    <div className="flex flex-col items-start justify-center gap-2" >
                        <h1 className="hidden md:block text-m text-(--graytext) font-medium">التخصص</h1>
                        <select
                            className="ring-[1.5px] ring-gray-300 p-2 max-w-s outline-none pt-1.5 pb-1.5 pl-4 pr-3 bg-[#F2F2F2] w-[210px] rounded-md  hover:bg-gray-500/10 px-2 focus-within:ring-(--buttonColor)"
                            {...register("course")}
                            defaultValue={data?.course}

                        >
                            <option value="الأعمال">الأعمال</option>
                            <option value="المحاسبة">المحاسبة</option>
                        </select>

                        {errors.course?.message && (
                            <p className="text-xs text-red-400">
                                {errors.course.message.toString()}
                            </p>

                        )}
                    </div>

                    <div className="flex flex-col items-start justify-center gap-2" >
                        <h1 className="hidden md:block text-m text-(--graytext) font-medium">الحد الأدنى للحمل</h1>

                        <InputField
                            label=""
                            name="minLoad"
                            type="number"
                            defaultValue={data?.minLoad ?? 12}
                            register={register}
                            error={errors?.minLoad} />
                    </div>


                </div>

                <div className="flex gap-30">
                    <div className="flex flex-col items-start justify-center gap-2" >
                        <h1 className="hidden md:block text-m text-(--graytext) font-medium">المسار</h1>
                        <select
                            className="ring-[1.5px] ring-gray-300 p-2 max-w-s outline-none pt-1.5 pb-1.5 pl-4 pr-3 bg-[#F2F2F2] w-[210px] rounded-md  hover:bg-gray-500/10 px-2 focus-within:ring-(--buttonColor)"
                            {...register("batch")}
                            defaultValue={data?.batch}

                        >
                            <option value="الفصل 1">الفصل 1</option>
                            <option value="الفصل 2">الفصل 2</option>
                        </select>

                        {errors.batch?.message && (
                            <p className="text-xs text-red-400">
                                {errors.batch.message.toString()}
                            </p>

                        )}
                    </div>

                    <div className="flex flex-col items-start justify-center gap-2" >
                        <h1 className="hidden md:block text-m text-(--graytext) font-medium">الحد الأعلى للحمل</h1>

                        <InputField 
                            label=""
                            name="maxLoad"
                            type="number"
                            defaultValue={data?.minLoad ?? 24}
                            register={register}
                            error={errors?.maxLoad} />
                    </div>
                </div>

                <div className="flex flex-col items-start gap-2" >
                        <h1 className="hidden md:block text-m text-(--graytext) font-medium">المواد المختارة</h1>
                         <select
                            className="ring-[1.5px] ring-gray-300 p-2  outline-none pt-1.5 pb-1.5 pl-4 pr-3 bg-[#F2F2F2] w-[540px]  rounded-md  hover:bg-gray-500/10 px-2 focus-within:ring-(--buttonColor)"
                            {...register("batch")}
                            defaultValue={data?.batch}

                        >
                            <option value="الفصل 1">محاسبة 1</option>
                            <option value="الفصل 2">محاسبة 2</option>
                        </select>

                        {errors.batch?.message && (
                            <p className="text-xs text-red-400">
                                {errors.batch.message.toString()}
                            </p>

                        )}

                    </div>
            </div>
           
            <button className="bg-(--buttonColor) text-white p-2 rounded-lg w-fit mt-10 ">
                {type === "create" ? "ارسال" : "تحديث"}
            </button>
        </form>
    );
};

export default StudentForm;