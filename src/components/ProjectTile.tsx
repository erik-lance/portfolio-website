import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

import IconButton from '@mui/material/IconButton'

interface ProjectTileProps {
    name: string;
    tagline: string;
    description: string;
    image?: string;
    link: string;
    github: string;
    tech: string[];
}

export default function ProjectTile(
    {name, tagline, description, image, link, github, tech}: ProjectTileProps
) {
    return (
        <Card
            sx={{
                width: 300,
                height: 300,
            }}
        >
            <CardHeader
                title={name}
                subheader={tagline}
            />

            <CardContent>
                {description}
            </CardContent>

            <CardActions>
                <IconButton aria-label="github" href={github}>
                </IconButton>
                <IconButton aria-label="link" href={link}>
                </IconButton>
            </CardActions>

        </Card>
    );
}