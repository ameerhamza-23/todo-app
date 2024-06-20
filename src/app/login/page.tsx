import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

function Login() {
    return (

        <div className="flex flex justify-center items-center h-full" >
            <div className="flex flex-col gap-4 w-1/2 md:w-1/2 lg:w-1/4">
            <Button className="flex gap-4" variant="secondary">
                    <Image src="google-icon.svg" alt="google logo" width={20} height={20}/>
                    <p>Login With Google Account</p>
                </Button>
                <div className="flex items-center gap-2 md:py-4">
                    <div className="bg-foreground" style={{ height: '1px', flex: 1 }}></div>
                    <div className="text-center">or</div>
                    <div className="bg-foreground" style={{ height: '1px', flex: 1 }}></div>
                </div>
                <h1 className="hidden md:block">Email Address</h1>
                <Input type="text" placeholder="name@gmail.com" className="bg-input"/>
                <h1 className="hidden md:block">Password</h1>
                <Input placeholder="Password" type="password" className="bg-input"/>
                <Button className="w-full text-white">Login</Button>
                <div className="p-4">
                    <Link href="/"><h1  className="text-center p-2">Forgot Password?</h1></Link>
                    <div className="text-center p-2">Dont have an account? <Link href="/signup" className="text-primary">Signup</Link></div>
                </div>

            </div>
        </div>

    )
}

export default Login