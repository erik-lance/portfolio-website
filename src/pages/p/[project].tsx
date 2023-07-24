import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import projects from '@/data/projects.json';
import { ProjectTileProps } from '@/components/ProjectTile';
import { Paper, Stack } from '@mui/material';

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
            <div
                className="flex flex-col gap-10"
            >
                {isLoading ? (
                    <h1>Loading...</h1>
                ) : !projectData ? (
                    <h1>Project not found.</h1>
                ) : (<>

                    <div className="flex flex-row items-center justify-center py-2 gap-5">
                        <Paper
                            elevation={5}
                        >
                            <img
                                src={"/project_imgs/" + projectData.image} alt={projectData.title}
                                className="max-h-72"
                            />
                        </Paper>


                        <Stack spacing={2}>
                            <h1 className="text-6xl font-bold">{projectData.title}</h1>
                            <h2>{projectData.tagline}</h2>
                        </Stack>

                    </div>

                    <p>{projectData.description}</p>
                </>)}
            </div>
        </>
    );
}
