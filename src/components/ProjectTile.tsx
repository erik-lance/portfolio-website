import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkIcon from '@mui/icons-material/Link'

import { Chip, Stack } from '@mui/material'

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
            }}
        >
            {/* If no image provided, do not render */}
            {image && 
            
            <CardMedia
                component="img"
                height="194"
                image={"/project_imgs/" + image}
                alt={name}
            />
            }
            
            <CardHeader
                title={name}
                subheader={tagline}
            />

            

            <CardContent>
                <Stack direction="row" spacing={1}>
                {tech.map((tech) => (
                    <Chip 
                        label={tech} 
                        variant="outlined"
                        sx={{
                            margin: 0.2,
                        }}
                        size="small"
                    />
                ))}
                </Stack>
                
                {description}
            </CardContent>

            <CardActions disableSpacing>
                <IconButton aria-label="github" href={github}>
                    <GitHubIcon />
                </IconButton>
                <IconButton aria-label="link" href={link}>
                    <LinkIcon />
                </IconButton>
            </CardActions>

        </Card>
    );
}