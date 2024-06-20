import Link from 'next/link'

export default function Navbar() {
    return (
        <div className="nav w-full flex justify-between h-full items-center px-4">
            <div>
                <Link href="/"><h1 className='font-bold md:text-2xl text-white'>Todo</h1></Link>
            </div>
            <div className="flex gap-5">
                <Link href="/login"  className='md:py-2 md:px-4 rounded-full font-bold border-secondary border-2 '>Login</Link>
                <Link href="/signup" className='md:bg-primary text-primary md:text-primary-foreground md:py-2 md:px-4 rounded-full font-bold'>Sign Up</Link>
            </div>
        </div>
    )
}