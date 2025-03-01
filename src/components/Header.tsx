import Link from "next/link";

export default function Header() {
    return (
        <div className='w-full flex flex-row justify-between items-center p-4'>
            <Link href='/' className="text-2xl font-bold">Home</Link>
            <div className='flex flex-row space-x-4'>
                <Link href='/education'>Education</Link>
                <Link href='/experience'>Experience</Link>
                <Link href='/projects'>Projects</Link>
                <Link href='/certificates'>Certifications</Link>
                <Link href='/events'>Events</Link>
                <Link href='/resume'>Resume</Link>
            </div>
        </div>
    );
}