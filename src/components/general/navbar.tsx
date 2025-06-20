import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { ModeToggle } from "../ModeToggle";
import { auth, signOut } from "@/app/utlis/auth";

export async function Navbar() {
    const session = await auth()
    return (
        <nav className="flex iteam-center justify-between py-5">

            <Link href="/">
                <h1 className="text-2xl font-bold">Hire<span className="text-primary text-green-400">flow</span></h1>
            </Link>

            <div className="flex item-center gap-4 ">
                <ModeToggle/>
                {/* <Button className="bg-green-400 text-black ">
                    Login
                </Button> */}
                {session?.user ? (
                    <form action={async () => {

                        "use server";
                        await signOut({redirectTo: "/"})
                    }}>
                        <Button className="bg-green-400 text-black font-bold cursor-pointer"> Logout </Button>
                    </form>
                  
                ): (
                    <Link href="/login" className={buttonVariants({variant: "outline", size: 'lg'})}>Login</Link>
                )}
            </div>

        </nav>
    )
}