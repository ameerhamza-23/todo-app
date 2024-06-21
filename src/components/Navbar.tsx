import Link from 'next/link'

export default function Navbar() {
    return (
        <div className="nav w-full flex justify-between h-full items-center px-4">
            <div>
                <Link href="/"><h1 className='font-bold md:text-2xl text-white'>Todo</h1></Link>
            </div>
        </div>
    )
}