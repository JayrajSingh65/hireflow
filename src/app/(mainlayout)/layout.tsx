import { Divide } from "lucide-react";
import { ReactNode } from "react";
import { Navbar } from "@/components/general/navbar";

export default function Mainlayout({children}: {children: ReactNode}) {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <Navbar/>
      {children}

      </div>
    )
}