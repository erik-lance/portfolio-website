export default function Header() {
    return (
        <div className='w-full flex flex-row justify-between items-center p-4'>
            <a className='text-2xl font-bold' href='/'>Home</a>
            <div className='flex flex-row space-x-4'>
                <a href='projects'>Projects</a>
                <a href='contact'>Contact</a>
                <a href='resume'>Resume</a>
            </div>
        </div>
    );
}