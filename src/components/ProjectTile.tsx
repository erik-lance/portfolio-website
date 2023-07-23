import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import CardActionArea from '@mui/material/CardActionArea'

import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkIcon from '@mui/icons-material/Link'

import { Chip, List, Stack } from '@mui/material'

export interface ProjectTileProps {
    title: string;
    tagline: string;
    description: string;
    image?: string;
    link: string;
    github: string;
    tech: string[];
}

function project_page_parse(title: string) {
    return title.toLowerCase().replace(/ /g, "_");
}

export default function ProjectTile(
    { title, tagline, description, image, link, github, tech }: ProjectTileProps
) {
    return (
        <Card
            sx={{
                width: 300,
            }}
        >
            {/* Clicking on the card's action area leads to its page */}
            <CardActionArea
                href={"/p/"+project_page_parse(title)}
                target="_blank"
            >
                {/* If no image provided, do not render */}
                {image &&

                    <CardMedia
                        component="img"
                        height="194"
                        image={"/project_imgs/" + image}
                        alt={title}
                    />
                }

                <CardHeader
                    title={title}
                    subheader={tagline}
                />

                <CardContent>
                    <List>
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
                    </List>
                </CardContent>
            </CardActionArea>
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