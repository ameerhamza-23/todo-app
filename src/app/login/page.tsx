import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

function Login() {
    return (

        <div className="flex flex justify-center items-center h-full" >
            <div className="flex flex-col gap-4 w-1/2 md:w-1/2 lg:w-1/4">
                <Button className="" variant="outline">Use Google Account</Button>
                <div className="flex items-center gap-2 py-4">
                    <div className="bg-foreground" style={{ height: '1px', flex: 1 }}></div>
                    <div className="text-center">or</div>
                    <div className="bg-foreground" style={{ height: '1px', flex: 1 }}></div>
                </div>
                <h1>Email Address</h1>
                <Input type="text" placeholder="name@gmail.com" className="bg-input"/>
                <h1>Password</h1>
                <Input placeholder="Password" type="password" className="bg-input"/>
                <Button className="w-full text-primary-foreground">Login</Button>
                <div className="p-4">
                    <Link href="/"><h1  className="text-center p-2">Forgot Password?</h1></Link>
                    <div className="text-center p-2">Dont have an account? <Link href="/signup" className="text-primary">Signup</Link></div>
                </div>

            </div>
        </div>

    )
}

export default Login