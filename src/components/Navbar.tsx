import Link from 'next/link'

export default function Navbar() {
    return (
        <div className="w-full flex justify-end p-9 ">
            <div className="flex gap-8">
                <Link href="/login">Login</Link>
                <Link href="/signup">Sign Up</Link>
            </div>
        </div>
    )
}