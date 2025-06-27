import { companySchema, jobSeekerSchema } from "@/app/utlis/ZodSchema";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from "next/image"
import {z} from "zod"
import { UploadButton, UploadDropzone } from "../general/uploadthing"



export function JobSeekerForm() {
    const form = useForm<z.infer<typeof jobSeekerSchema>>({
        resolver: zodResolver(jobSeekerSchema),
        defaultValues: {
            name: "",
            about: "",
            resume: "",
        }
    })
    return (
        <Form {...form}>
            <form className="space-y-6">

            <FormField
                control={form.control}
                name="name"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Full Name </FormLabel>
                        <FormControl>
                            <Input placeholder="Enter Your Full Name" {...field}></Input>
                        </FormControl>
                    </FormItem>

                )}
                
                
                />

              <FormField
                control={form.control}
                name="about"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Your Bio</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter Bio" {...field}></Input>
                        </FormControl>
                    </FormItem>

                )}
                
                
                />

<FormField
                control={form.control}
                name="resume"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Resume (pdf)</FormLabel>
                        <FormControl>
                            <div>
                                {field.value ? (
                                 <div className="relative w-fit">
                                    <Image src={field.value} alt="company" width={100} height={100}/>
                                     </div>
                                ) : (

                                    <UploadDropzone endpoint="ResumeUploader" onClientUploadComplete={ (res) => {
                                        field.onChange(res[0].url)
        
                                    }}
                                    onUploadError={() => {
                                        console.log("somthig wrong")
                                    }}
        
                                    
        
                                  />

                                )}
                            </div>
                            
                         
                        </FormControl>
                    </FormItem>

                )}
                
                
                />


            </form>
        </Form>
    )
}