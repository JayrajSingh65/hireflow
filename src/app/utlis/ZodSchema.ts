
import {z} from "zod"

export const companySchema = z.object({
    name: z.string().min(2, "Company name must be 2 char"),
    location: z.string().min(1, "Location must be defined"),
    about: z.string().min(10, "Please provide some information about your company"),
    logo: z.string().min(1, "Please upload a logo"),
    website: z.string().url("Please enter a valid url"),

    xaccount: z.string().optional(),

});

export const jobSeekerSchema = z.object({
    name: z.string().min(2, "Name must be atleast 2 char"),
    about: z.string().min(10, "Please provide more information about you"),
    resume: z.string().min(1, "Please provide your resume")
})