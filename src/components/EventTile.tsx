import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Chip, List, Typography } from "@mui/material";

export interface EventTileProps {
    id: number,
    name: string,
    date: string,
    image?: string,
    link: string,
    description: string,
    tech: string[],
    type: string,
}

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