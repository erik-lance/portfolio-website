import Link from "next/link";

/**
 * Header component that provides consistent navigation across all pages.
 * Displays a navigation bar with links to all major sections of the portfolio.
 * 
 * Features:
 * - Fixed positioning at top of page
 * - Responsive layout with flexbox
 * - Links to: Home, Education, Experience, Projects, Certifications, Events, Resume
 * 
 * @returns {JSX.Element} Navigation header component
 */
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