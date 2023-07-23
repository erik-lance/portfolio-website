interface ProjectTileProps {
    name: string;
    description: string;
    image: string;
    link: string;
    github: string;
    tech: string[];
}

export default function ProjectTile(
    {name, description, image, link, github, tech}: ProjectTileProps
) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            Test
        </div>
    );
}