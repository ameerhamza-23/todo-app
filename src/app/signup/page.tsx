"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ChangeEvent } from "react";

function Signup() {
    const [user, setUser] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = async()=> {
        console.log(user)
    }

    return (
        <div className="flex justify-center items-center h-full">
            <div className="flex flex-col gap-4 w-1/2 md:w-1/2 lg:w-1/4">
                <Input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleChange}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Create Password"
                    value={user.password}
                    onChange={handleChange}
                />
                <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={user.confirmPassword}
                    onChange={handleChange}
                />
                <Button className="w-full text-white" onClick={handleSubmit}>Sign up</Button>
                <div className="">
                    <div className="text-center p-2">
                        Dont have an account? <Link href="/signup" className="text-primary">Signup</Link>
                    </div>
                </div>
                <div className="flex items-center gap-2 py-1">
                    <div className="bg-foreground" style={{ height: '1px', flex: 1 }}></div>
                    <div className="text-center">or</div>
                    <div className="bg-foreground" style={{ height: '1px', flex: 1 }}></div>
                </div>
                <Button className="" variant="secondary">Login With Google Account</Button>
            </div>
        </div>
    );
}

export default Signup;
