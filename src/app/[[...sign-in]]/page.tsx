"use client"

import { users } from "@/lib/data";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // ✅ استدعاء useRouter
import { Info } from "lucide-react";

export default function LoginPage() {
  const router = useRouter(); // ✅ إنشاء router
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const match = users.find(
      (user) => user.email === email && user.password === password
    );

    if (match) {
      if (match.role === "student") {
        router.push("/student"); // ✅ نقل داخلي بدون إعادة تحميل
      } else {
        router.push("/"); // لو تبغين مثلا صفحة ثانية
      }
    } else {
      setError("الإيميل أو كلمة المرور غير صحيحة");
    }
  };

  return (
    <div className="h-screen flex gap-10">
      {/* اليمين - فورم تسجيل الدخول */}
      <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center bg-white pt-15 pb-15 pr-20 pl-10">
        <div className="flex flex-col w-full h-full justify-between">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/Logo1.png"
              alt="Logo"
              width={150}
              height={80}
              className="object-contain mb-8"
            />
            <div className="flex flex-col justify-center gap-1">
              <h1 className="text-3xl font-bold text-center text-(--graytext)">مرحبًا بك</h1>
              <h1 className="text-m font-medium text-center text-(--graylight)">
                فضلاً، سجّل الدخول إلى حسابك للمتابعة
              </h1>
            </div>
          </div>

          <div className="flex flex-col w-full gap-4">
              
              {error && (
              
              <p className="text-red-600 text-sm text-center mb-2 flex flex-row gap-1 items-center justify-start">
                <Info size={20} color="#dc2626" />{error}</p>
            )}
            <input
              type="email"
              placeholder="الإيميل الجامعي"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-(--buttonColor)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="كلمة المرور"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handleLogin}
              className="bg-(--buttonColor) hover:bg-[#1995F1] text-white py-2 rounded-lg transition-colors"
            >
              دخول
            </button>
            
          </div>
        </div>
      </div>

      {/* اليسار - صورة أو إعلان */}
      <div
        className="hidden md:flex w-1/2 relative items-center justify-center bg-grad-verticall rounded-[76px] m-10"
        onContextMenu={(e) => e.preventDefault()}
      >
        <Image
          src="/Ad-.png"
          alt=""
          fill
          className="object-contain"
          draggable={false}
        />
      </div>
    </div>
  );
}
