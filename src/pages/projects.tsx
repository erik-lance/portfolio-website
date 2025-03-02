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
                    rowSpacing={2}
                    columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4}}
                >
                    {projects.map((project) => (
                        <Grid 
                            item 
                            xs={12}
                            sm={12}
                            md={6}
                            lg={3} 
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