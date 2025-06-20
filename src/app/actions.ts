"use server"


import { z } from "zod";
import { requireUser } from "./utlis/requireUser"
import { companySchema } from "./utlis/ZodSchema";
import { prisma } from "./utlis/db";
import { redirect } from "next/navigation";


export async function createCompany(data: z.infer<typeof companySchema>) {
    const session = await requireUser();

    const validateData = companySchema.parse(data);

    await prisma.user.update({
        where: {
            id: session.id,
        },

        data: {
            onboardingCompleted: true,
            userType: 'COMPANY',
            company: {
                create: {
                    ...validateData,
                }
            }

        }
    });


return redirect("/")

}