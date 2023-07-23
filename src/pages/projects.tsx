import ProjectTile from "@/components/ProjectTile";
import { Grid } from "@mui/material";

export default function Projects() {
    return (
        <>
            <h1 className="text-6xl font-bold text-center">Projects</h1>
            <div>
                <Grid
                    container
                    spacing={2}
                >
                    <Grid item xs>
                        <ProjectTile
                            name="Test"
                            tagline="Test"
                            description="Test"
                            image="Test"
                            link="Test"
                            github="Test"
                            tech={["Test"]}
                        />
                    </Grid>
                </Grid>
            </div>
        </>
    );
}