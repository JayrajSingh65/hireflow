import Loginform from "@/components/forms/Loginform";
import { Button } from "@/components/ui/button";

export default function Login() {
    return (
        <div className="min-h-screen w-screen flex items-center justify-center">
            <div className="flex w-full max-w-sm flex-col gap-6">

        <h1 className=" text-2xl font-bold self-center">Hire<span className="text-green-400">Flow</span></h1>
            <Loginform/>
            </div>
        </div>
    )
}