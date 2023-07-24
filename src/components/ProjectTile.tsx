import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import CardActionArea from '@mui/material/CardActionArea'

import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkIcon from '@mui/icons-material/Link'

import { Chip, List } from '@mui/material'

export interface ProjectTileProps {
    title: string;
    tagline: string;
    description?: string;
    image?: string;
    link: string;
    github: string;
    tech: string[];
}

function project_page_parse(title: string) {
    return title.toLowerCase().replace(/ /g, "_");
}

export default function ProjectTile(
    { title, tagline, image, link, github, tech }: ProjectTileProps
) {
    return (
        <Card
            sx={{
                width: 300,
                maxHeight: 400,
                height: "100%",
            }}
        >
            {/* Clicking on the card's action area leads to its page */}
            <CardActionArea
                href={"/p/" + project_page_parse(title)}
                target="_blank"
            >
                {/* If no image provided, do not render */}
                {image &&

                    <CardMedia
                        component="img"
                        image={"/project_imgs/" + image}
                        alt={title}
                        sx={{
                            maxHeight: 138,
                            boxShadow: 3,
                        }}
                    />
                }

                <CardHeader
                    title={title}
                    subheader={tagline}
                    sx={{
                        paddingBottom: 0,
                    }}
                />

                <CardContent
                    sx={{
                        paddingY: 0.5,
                        maxHeight: 170,
                        overflow: "auto"
                    }}
                >
                    <List>
                        {tech.map((tech) => (
                            <Chip
                                key={tech}
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

                {/* If there is a git link then add git button */}
                {github && <IconButton aria-label="github" href={github} target="_blank">
                    <GitHubIcon />
                </IconButton>}

                {/* If there is a link then add link button*/}
                {link && <IconButton aria-label="link" href={link} target="_blank">
                    <LinkIcon />
                </IconButton>}

            </CardActions>

        </Card>
    );
}