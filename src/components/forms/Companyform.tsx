
import { useForm } from "react-hook-form"

import {zodResolver} from "@hookform/resolvers/zod"
import { companySchema } from "@/app/utlis/ZodSchema"
import {z} from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form"
import { Input } from "../ui/input"
import { Select, SelectItem } from "../ui/select"
import { SelectContent, SelectGroup, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { countryList } from "@/app/utlis/countries"
import { count } from "console"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { Loader2 } from "lucide-react"
import { UploadButton, UploadDropzone } from "../general/uploadthing"
import { createCompany } from "@/app/actions"
import { useState } from "react"
import Image from "next/image"




export function CompanyForm() {

    const form = useForm<z.infer<typeof companySchema>>({
        resolver: zodResolver(companySchema),
        defaultValues: {
            about: "",
            location: "",
            logo: "",
            name: "",
            website: "",
            xaccount: "",
        }
    });

    const [pending, setPending] = useState(false)

    async function onsubmit(data: z.infer<typeof companySchema>) {

        try {
            setPending(true);
            await createCompany(data)
        } catch (error) {
            if(error instanceof Error && error.message !== "NEXT_REDIRECT") {
                console.log("somthing went wrong")
            }
        }  finally {
            setPending(false)
        }

    }

    return (
       <Form {...form}>

        <form className="space-y-4 " onSubmit={form.handleSubmit(onsubmit)}>
            <div className="grid gird-cols-1 md:grid-cols-2 gap-6 ">

                <FormField
                control={form.control}
                name="name"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter Company Name" {...field}></Input>
                        </FormControl>
                    </FormItem>

                )}
                
                
                />

               <FormField
                control={form.control}
                name="location"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Company Location</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>

                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Location"/>
                                </SelectTrigger>
                            </FormControl>

                            <SelectContent className="bg-black">
                                <SelectGroup>
                                    <SelectLabel>Worldwide</SelectLabel>
                                    <SelectItem value="worldwide">
                                        <span>🌍</span> <span>Worldwide</span>
                                    </SelectItem>
                                </SelectGroup>
                                <SelectGroup>
                                    <SelectLabel>
                                        Location
                                    </SelectLabel>
                                    {countryList.map((country) => (
                                        <SelectItem key={country.code} value={country.name}>
                                            <span>
                                                {country.flag}
                                            </span>
                                            <span className="pl-2">{country.name}</span>
                                        </SelectItem>

                                    ))}
                                </SelectGroup>
                            </SelectContent>

                        </Select>
                    </FormItem>

                )}
                
                
                />


            <FormField
                control={form.control}
                name="website"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Website</FormLabel>
                        <FormControl>
                            <Input placeholder="www.dexpen.com" {...field}></Input>
                        </FormControl>
                    </FormItem>

                )}
                
                
                />

            <FormField
                control={form.control}
                name="xaccount"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>X(Twitter)</FormLabel>
                        <FormControl>
                            <Input placeholder="Your Twitter account" {...field}></Input>
                        </FormControl>
                    </FormItem>

                )}
                
                
                />



            </div>

            <FormField
                control={form.control}
                name="about"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>About us</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Tell us about your company" {...field}/>
                        </FormControl>
                    </FormItem>

                )}
                
                
                />


            <FormField
                control={form.control}
                name="logo"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Company Logo</FormLabel>
                        <FormControl>
                            <div>
                                {field.value ? (
                                 <div className="relative w-fit">
                                    <Image src={field.value} alt="company" width={100} height={100}/>
                                     </div>
                                ) : (

                                    <UploadDropzone endpoint="imageUploader" onClientUploadComplete={ (res) => {
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

                <Button type="submit" className="w-full bg-green-400 font-bold" disabled={pending}>
                    {pending ? "Submiting" : "continue"}
                    

                </Button>




        </form>

       </Form>
    )

}