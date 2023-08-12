import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Chip, List, Typography } from "@mui/material";

export interface EventTileProps {
    id: number,
    name: string,
    date: string,
    image?: string,
    link: string,
    description: string,
    tech: string[],
}

export default function EventTile(
    { id, name, date, image, link, description, tech }: EventTileProps
) {
    return (
        <Card
            key={id}
            sx={{
                backgroundColor: "secondary.main",
                boxShadow: 5,
                width: 300,
                height: 400,
            }}
        >
            <CardActionArea
                href={link}
                target="_blank"
                sx={{
                    height: "100%",
                }}
            >
                {image && (
                    <CardMedia
                        component="img"
                        image={"/event_imgs/" + image}
                        alt={name}
                        sx={{
                            maxHeight: 138,
                            boxShadow: 3,
                            objectFit: "bottom"
                        }}
                    />
                )}

                <CardHeader
                    title={name}
                    subheader={date}
                    sx={{
                        paddingBottom: 0,
                    }}
                />

                <CardContent
                    sx={{
                        paddingY: 0.5,
                    }}
                >
                    <Typography>
                        {/* Shortens description to 100 characters with a ... */}
                        {description.length > 100 ? description.substring(0, 100) + "..." : description}
                    </Typography>
                    <List>
                        {tech.map((tech) => (
                            <Chip
                                key={tech}
                                label={tech}
                                variant="outlined"
                            />
                        ))}
                    </List>
                </CardContent>

            </CardActionArea>
        </Card>
    )
}