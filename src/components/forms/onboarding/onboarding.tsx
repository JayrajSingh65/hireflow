"use client"
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { UsertypeSelection } from "./Usertypeform";
import { CompanyForm } from "../Companyform";


type UserSelectionType = "company" | "jobseeker" | null ;

export default function OnboardingForm() {
    const [step, Setstep] =useState(1);
    const [usertype, setUsertype] = useState<UserSelectionType>(null);

    function handelUsertype(type: UserSelectionType) {
        setUsertype(type);
        Setstep(2)

    };

    function renderStep() {
        switch(step) {
            case 1: 
              return <UsertypeSelection onSelect={handelUsertype}/>;

            case 2:
                return usertype == "company"  ? <CompanyForm/> : (<p>User is a job seeker</p> );
               
            default: 
            return null

        }
    }
    return (
        <>
        <div className="flex items-center gap-2 mb-10">
            <h1 className="text-4xl font-bold">Hire<span className="text-green-400">Flow</span></h1>

        </div>

        <Card className="flex justify-center max-w-lg w-full">

           <CardContent className="p-6">
            {renderStep()}
           </CardContent>

        </Card>
        </>
    )
}