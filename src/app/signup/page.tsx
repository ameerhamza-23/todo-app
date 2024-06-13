import  Link  from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function Signup() {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="flex flex-col gap-4 w-1/2 md:w-1/2 lg:w-1/4">
                
                
                <Input type="text" placeholder="Email" />
                <Input placeholder="Create Password" type="password" />
                <Input placeholder="Confirm Password" type="password" />
                <Button className="w-full text-primary-foreground">Sign up</Button>
                <div className="">
                    <div className="text-center p-2">Dont have an account? <Link href="/signup" className="text-primary">Signup</Link></div>
                </div>
                <div className="flex items-center gap-2 py-1">
                    <div className="bg-foreground" style={{ height: '1px', flex: 1 }}></div>
                    <div className="text-center">or</div>
                    <div className="bg-foreground" style={{ height: '1px', flex: 1 }}></div>
                </div>
                <Button className="" variant="secondary">Login With Google Account</Button>

            </div>
        </div>
    )
}

export default Signup