import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import projects from '@/data/projects.json';
import { ProjectTileProps } from '@/components/ProjectTile';

export default function Project() {
    const router = useRouter();
    const { project } = router.query;

    const [isLoading, setIsLoading] = useState(true);
    const [projectData, setProjectData] = useState<ProjectTileProps | null>(null);

    useEffect(() => {
        // Only run the useEffect on the client side
        if (typeof window !== 'undefined') {
            console.log('Client-side project:', project);

            const getProjectData = async () => {
                if (project) {
                    const projectData = projects.find((projectItem) => projectItem.id === project);

                    if (projectData) {
                        setProjectData(projectData);
                    } else {
                        console.error(`Project with ID "${project}" not found.`);
                        setProjectData(null);
                    }

                    setIsLoading(false);
                } else {
                    console.error('No project ID provided.');
                    setProjectData(null);
                    setIsLoading(false);
                }
            };

            getProjectData();
        }
    }, [project]);

    return (
        <>
            <h1 className="text-6xl font-bold text-center">Project</h1>
            <div>
                {isLoading ? (
                    <h1>Loading...</h1>
                ) : !projectData ? (
                    <h1>Project not found.</h1>
                ) : (
                    
                    <div>
                        <h1>{projectData.title}</h1>
                        <h2>{projectData.tagline}</h2>
                        <p>{projectData.description}</p>
                    </div>
                )}
            </div>
        </>
    );
}
