import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import projects from '@/data/projects.json';
import { ProjectTileProps } from '@/components/ProjectTile';
import { IconButton, Paper, Stack, Typography } from '@mui/material';

import GithubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

import Image from 'next/image';

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
                            <Image
                                src={"/project_imgs/" + projectData.image} alt={projectData.title}
                                className="max-h-72"
                            />
                        </Paper>


                        <Stack spacing={2}>
                            <Typography
                                variant="h2"
                                color="primary.light"
                                fontWeight={700}
                            >
                                {projectData.title}
                            </Typography>

                            <Typography
                                variant="h5"
                                color="text.secondary"
                                fontWeight={500}
                            >
                                {projectData.tagline}
                            </Typography>
                        </Stack>

                    </div>

                    <Typography
                        variant="body1"
                        color="text.primary"
                    >
                        {projectData.description}
                    </Typography>

                    {/* This contains the links of the project */}
                    <div
                        className="flex flex-row gap-5 justify-end"
                    >
                        {projectData.github &&
                            <IconButton
                                href={projectData.github}
                                target="_blank"
                                className="flex-grow"
                                color='primary'
                            >
                                <GithubIcon />
                            </IconButton>}


                        {projectData.link &&
                            <IconButton
                                href={projectData.link}
                                target="_blank"
                                className="flex-grow"
                                color='primary'
                            >
                                <LinkIcon />
                            </IconButton>
                        }
                    </div>

                </>)}
            </div>
        </>
    );
}
