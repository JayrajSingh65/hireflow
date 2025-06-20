import { Button } from "@/components/ui/button";
import { Building, Building2, UserRound } from "lucide-react";


type UserSelectionType = "company" | "jobseeker"

interface UsertyoeSelectionprops {
    onSelect: (type: UserSelectionType) => void;
}

export function UsertypeSelection({onSelect}: UsertyoeSelectionprops) {

    return (
        <div className="space-y-8">
            <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">Welcome! Let Started</h2>
                <p className="text-gray-400">Choose how you like to use our platform</p>

            </div>

            <div className="grid gap-4 py-4">

                {/* organization */}

                <Button onClick={() => onSelect("company")} variant="outline" className="w-full h-auto p-4 items-center gap-4 border-2 transition-all duration-200 hover:border-green-400 hover:bg-green-400/10">
                    <div className="rounded-full size-12 flex items-center justify-center bg-green-600/10">
                        <Building2 className="size-6 text-green-400"/>
                    </div>

                    <div className="text-left">
                        <h3 className="font-semibold text-lg">Company / organization</h3>
                        <p>Post jobs and find great talent</p>
                    </div>
                </Button>

                 {/* job seeker */}
                <Button onClick={() => onSelect("jobseeker")} variant="outline" className="w-full h-auto p-4 items-center gap-4 border-2 transition-all duration-200 hover:border-green-400 hover:bg-green-400/10">
                    <div className="rounded-full size-12 flex items-center justify-center bg-green-600/10">
                        <UserRound className="size-6 text-green-400"/>
                    </div>

                    <div className="text-left">
                        <h3 className="font-semibold text-lg">Job Seeker</h3>
                        <p>Find your dream job</p>
                    </div>
                </Button>

            </div>
        </div>
    )

}