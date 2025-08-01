'use client';
import EventCalendar from "@/components/EventCalendar"
import React from "react"
import { Calendar } from "./ui/calendar";
import { ChevronDown } from "lucide-react";
const LeftSide = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <div className="flex flex-col gap-6 mb-5">
            <div className=" w-fit flex items-center flex-col gap-6 p-4 bg-[#F7F7F7] rounded-xl shadow-lg h-fit">
                <div className="w-full flex items-center justify-between">
                    <span className="text-(--graytext) font-semibold text-m">التقويم الأكاديمي</span>
                    <ChevronDown color="#1786D9" />
                </div>
                {/* التقويم */}
                <div className="bg-white flex items-center justify-center rounded-xl p-4">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-lg "
                    />
                </div>

                {/* الفعاليات */}
                <div className="bg-white w-full rounded-xl  p-4">
                    <h2 className="text-sm font-bold mb-4">الفعاليات القادمة</h2>
                    <ul className="space-y-2">
                        <li className="bg-gray-100 rounded-md p-2 text-sm text-(--graytext)">📌 موعد تسجيل المقررات - 1 محرم</li>
                        <li className="bg-gray-100 rounded-md p-2 text-sm text-(--graytext)">🎓 بداية الدراسة - 5 محرم</li>
                        <li className="bg-gray-100 rounded-md p-2 text-sm text-(--graytext)">📊 اختبار تشخيصي - 12 محرم</li>
                    </ul>
                </div>
            </div>
            <div className=" w-full flex items-center flex-col gap-6 p-4 bg-[#F7F7F7] rounded-xl shadow-lg h-fit">
                <div className="w-full flex items-center justify-between">
                    <span className="text-(--graytext) font-semibold text-m">المهام والواجبات</span>
                    <ChevronDown color="#1786D9" />
                </div>
                <ul className="w-full space-y-5">
                    <div className="w-full flex flex-col justify-center items-start bg-white outline-2 outline-[#F2994A] rounded-xl p-2">
                        <div className="flex justify-between items-center w-full">
                            <span className="text-base text-(--graytext) font-bold">أساسيات التصميم</span>
                            <span className="text-[#F2994A] bg-[#FFEBDB]  rounded-xl text-left font-semibold p-1.5 text-xs">لم يُرفع</span>
                        </div>
                        <div className="w-full h-px bg-gray-300 my-3" />
                        <div className="flex flex-col items-strat" >
                            <div className="flex gap-1">
                                <span className="text-sm text-(--graytext) text-right font-semibold">المهمة :</span>
                                <span className="text-(--graytext) text-sm">مشروع التصميم 1</span>
                            </div>
                            <div className="flex gap-1 ">
                                <span className="text-sm text-(--graytext) font-semibold">الموعد النهائي :</span>
                                <span className="text-(--graytext)  text-sm">11 فبراير 2024</span>
                            </div>
                        </div>

                    </div>

                    <div className="w-full flex flex-col justify-center items-start bg-white outline-2 outline-[#417FF2] rounded-xl p-2">
                        <div className="flex justify-between items-center w-full">
                            <span className="text-base text-(--graytext) font-bold">أساسيات التصميم</span>
                            <span className="text-[#417FF2] bg-[#E7F1F9]  rounded-xl text-left font-semibold p-1.5 text-xs">مرفوع</span>
                        </div>
                        <div className="w-full h-px bg-gray-300 my-3" />
                        <div className="flex flex-col items-strat" >
                            <div className="flex gap-1">
                                <span className="text-sm text-(--graytext) text-right font-semibold">المهمة :</span>
                                <span className="text-(--graytext)  text-sm">مشروع التصميم 1</span>
                            </div>
                            <div className="flex gap-1 ">
                                <span className="text-sm text-(--graytext) font-semibold">الموعد النهائي :</span>
                                <span className="text-(--graytext)  text-sm">11 فبراير 2024</span>
                            </div>
                        </div>

                    </div>

                    <div className="w-full flex flex-col justify-center items-start bg-white outline-2 outline-[#CDD8E5] rounded-xl p-2">
                        <div className="flex justify-between items-center w-full">
                            <span className="text-base text-(--graytext) font-bold">أساسيات التصميم</span>
                            <span className="text-[#9AA6B5] bg-[#EAEEF1]  rounded-xl text-left font-semibold p-1.5 text-xs">لم يبدأ</span>
                        </div>
                        <div className="w-full h-px bg-gray-300 my-3" />
                        <div className="flex flex-col items-strat" >
                            <div className="flex gap-1">
                                <span className="text-sm text-(--graytext) text-right font-semibold">المهمة :</span>
                                <span className="text-(--graytext)  text-sm">مشروع التصميم 1</span>
                            </div>
                            <div className="flex gap-1 ">
                                <span className="text-sm text-(--graytext) font-semibold">الموعد النهائي :</span>
                                <span className="text-(--graytext)  text-sm">11 فبراير 2024</span>
                            </div>
                        </div>

                    </div>
                </ul>
            </div>

        </div>
    )
}

export default LeftSide