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

/**
 * Props for the ProjectTile component
 */
export interface ProjectTileProps {
    /** The title of the project */
    title: string;
    /** A short one-line description of the project */
    tagline: string;
    /** Detailed project description (optional, not displayed on tile) */
    description?: string;
    /** Filename of the project image (stored in /public/project_imgs/) */
    image?: string;
    /** External URL to the live project */
    link: string;
    /** GitHub repository URL */
    github: string;
    /** Array of technology names used in the project */
    tech: string[];
}

/**
 * Converts a project title to a URL-friendly slug
 * 
 * @param {string} title - The project title to convert
 * @returns {string} URL-friendly slug (lowercase with underscores)
 * 
 * @example
 * project_page_parse("My Project") // Returns: "my_project"
 */
function project_page_parse(title: string) {
    return title.toLowerCase().replace(/ /g, "_");
}

/**
 * ProjectTile displays a project in a card format with image, title, tagline,
 * technologies, and action buttons for GitHub and external links.
 * The entire card is clickable and navigates to the project detail page.
 * 
 * @param {ProjectTileProps} props - Component props
 * @returns {JSX.Element} A Material UI Card component displaying project information
 * 
 * @example
 * <ProjectTile
 *   title="My Project"
 *   tagline="A cool project"
 *   image="project.png"
 *   link="https://myproject.com"
 *   github="https://github.com/user/project"
 *   tech={["React", "TypeScript"]}
 * />
 */
export default function ProjectTile(
    { title, tagline, image, link, github, tech }: ProjectTileProps
) {
    return (
        <Card
            sx={{
                maxHeight: 400,
                height: "100%",
                bgcolor: "transparent",
            }}
        >
            {/* Clicking on the card's action area leads to its page */}
            <CardActionArea
                href={"/p/" + project_page_parse(title)}
            >
                {/* If no image provided, do not render */}
                {image &&

                    <CardMedia
                        component="img"
                        image={"/project_imgs/" + image}
                        alt={title}
                        sx={{
                            maxHeight: 138,
                            objectFit: "bottom"
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
                {github && <IconButton aria-label="github" href={github} target="_blank"
                    color='primary'
                >
                    <GitHubIcon />
                </IconButton>}

                {/* If there is a link then add link button*/}
                {link && <IconButton aria-label="link" href={link} target="_blank"
                    color='primary'
                >
                    <LinkIcon />
                </IconButton>}

            </CardActions>

        </Card>
    );
}