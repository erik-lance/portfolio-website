import ProjectTile from "@/components/ProjectTile";
import { Grid } from "@mui/material";

import projects from "@/data/projects.json";

export default function Projects() {
    return (
        <>
            <h1 className="text-6xl font-bold text-center">Projects</h1>
            <div>
                <Grid
                    container
                    spacing={2}
                >
                    {projects.map((project) => (
                        <Grid item xs>
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
        </>
    );
}