import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Chip, List, Typography } from "@mui/material";

/**
 * Props for the EventTile component
 */
export interface EventTileProps {
    /** Unique identifier for the event */
    id: number,
    /** Name of the event */
    name: string,
    /** Date of the event (any format) */
    date: string,
    /** Filename of the event image (optional) */
    image?: string,
    /** URL to the event website or details */
    link: string,
    /** Description of the event (will be truncated to 100 characters on display) */
    description: string,
    /** Array of technologies or topics covered at the event */
    tech: string[],
    /** Type of event: "attended" for events attended, "speaker" for speaking engagements */
    type: string,
}

/**
 * EventTile displays an event or speaking engagement in a card format.
 * Shows event image, name, date, description (truncated), and technology tags.
 * The image is clickable and links to the event website.
 * 
 * Image source path is determined by the event type:
 * - "attended" events: images from /public/event_imgs/
 * - "speaker" events: images from /public/speaker_imgs/
 * 
 * @param {EventTileProps} props - Component props
 * @returns {JSX.Element} A Material UI Card component displaying event information
 * 
 * @example
 * <EventTile
 *   id={1}
 *   name="Tech Conference 2024"
 *   date="January 15, 2024"
 *   image="conference.jpg"
 *   link="https://conference.com"
 *   description="An amazing tech conference about cloud computing..."
 *   tech={["Azure", "AWS", "Cloud"]}
 *   type="attended"
 * />
 */
export default function EventTile(
    { id, name, date, image, link, description, tech, type }: EventTileProps
) {
    const img_src: string = type === "attended" ? "/event_imgs/" : "/speaker_imgs/";
    return (
        <Card
            key={id}
            elevation={0}
            sx={{
                backgroundColor: "transparent",
                minHeight: 400,
            }}
        >
            <CardActionArea
                href={link}
                target="_blank"
            >
                {image && (
                    <CardMedia
                        component="img"
                        image={img_src + image}
                        alt={name}
                        sx={{
                            maxHeight: 138,
                            objectFit: "bottom"
                        }}
                    />
                )}

            </CardActionArea>
            
            <CardHeader
                title={name}
                subheader={date}
                sx={{
                    paddingBottom: 0,
                }}
            />

            <CardContent>
                <Typography>
                    {/* Shortens description to 100 characters with a ... */}
                    {description.length > 100 ? description.substring(0, 100) + "..." : description}
                </Typography>
                <List
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 0.5,
                    }}
                >
                    {tech.map((tech) => (
                        <Chip
                            key={tech}
                            label={tech}
                            variant="outlined"
                        />
                    ))}
                </List>
            </CardContent>

            
        </Card>
    )
}