import OnboardingForm from "@/components/forms/onboarding/onboarding";
import { prisma } from "../utlis/db";
import { redirect } from "next/navigation";
import { requireUser } from "../utlis/requireUser";



// async function checkIfUserOnboardingCompleted(userId: string) {
//     const user = await prisma.user.findUnique({
//         where: {
//             id: userId,
//         },
//         select: {
//             onboardingCompleted: true,
//         }
//     });

//     if (user?.onboardingCompleted === true) {
//         try {
//             redirect("/");
//         } catch (error) {
//             // Re-throw the redirect error
//             throw error;
//         }
//     }
// }

export default async function OnboardingPage()  {
    const session = await requireUser();

    // await checkIfUserOnboardingCompleted(session.id as string)
   
    return (
        <div className="min-h-screen w-full justify-center items-center flex  flex-col py-8">
            <OnboardingForm/>
           
        </div>
    )

}