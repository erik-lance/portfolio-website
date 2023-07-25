import Typography from "@mui/material/Typography"

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center">
            <Typography
                variant="h1"
                component="h1"
                fontWeight={700}
                color="primary.main"
            >
                Hello, I&apos;m Erik
            </Typography>
        </div>
    );
}