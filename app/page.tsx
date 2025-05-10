import { GalleryVerticalEnd } from "lucide-react"

import { LoginForm } from "@/components/login-form"
import Image from 'next/image'
import BGlogin from "@/app/assets/bg-login.svg"
import Logo from "@/app/assets/pms-logo.png"

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">

        </div>
        <div className="flex flex-1 flex-col items-center justify-center">
          <a href="#" className="flex items-center gap-2 py-5  font-medium">
            <Image src={Logo}
              alt="Image"

            />

          </a>
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-primary relative hidden lg:block">
        <Image src={BGlogin}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
