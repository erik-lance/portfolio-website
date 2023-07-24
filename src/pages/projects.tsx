import ProjectTile from "@/components/ProjectTile";
import { Grid, Stack } from "@mui/material";

import projects from "@/data/projects.json";

export default function Projects() {
    return (
        <Stack
            spacing={2}
        >
            <h1 className="text-6xl font-bold text-center">Projects</h1>
            {/* This contains search and filters for the grid */}
            <div>
                
            </div>

            <div>
                <Grid
                    container
                    spacing={2}
                >
                    {projects.map((project) => (
                        <Grid 
                            item 
                            xs
                            key={project.id}
                        >
                            <ProjectTile
                                title={project.title}
                                tagline={project.tagline}
                                image={project.image}
                                link={project.link}
                                github={project.github}
                                tech={project.tech}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Stack>
    );
}