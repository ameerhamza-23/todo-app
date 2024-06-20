import Link from 'next/link'

export default function Navbar() {
    return (
        <div className="w-full flex justify-between p-9 ">
            <div>
                <Link href="/"><h1 className='font-bold text-2xl text-white'>Todo</h1></Link>
            </div>
            <div className="flex gap-8">
                <Link href="/login">Login</Link>
                <Link href="/signup">Sign Up</Link>
            </div>
        </div>
    )
}