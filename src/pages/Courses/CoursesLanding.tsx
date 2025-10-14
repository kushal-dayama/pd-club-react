// /courses/index.tsx
import { Box, Grid, Card, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CoursesLanding() {
    const navigate = useNavigate();

    const categories = [
        {
            title: "Technical Courses",
            description: "Enhance your technical skills with our expert-designed modules.",
            image: "/img/technical.jpg",
            path: "/courses/technical",
        },
        {
            title: "Personality Development Courses",
            description: "Build leadership, communication, and personal growth skills.",
            image: "/img/pd.jpg",
            path: "/courses/personality-development",
        },
    ];

    return (
        <Box sx={{ py: 8, px: 3, textAlign: "center" }}>
            <Typography variant="h3" mb={4} fontWeight={700}>
                Explore Our Courses
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {categories.map((cat) => (
                    <Grid size={{ xs: 12, sm: 6, md: 5 }} key={cat.title}>
                        <Card
                            sx={{
                                p: 3,
                                borderRadius: 4,
                                boxShadow: 3,
                                "&:hover": { boxShadow: 6, transform: "translateY(-5px)", transition: "0.3s" },
                            }}
                        >
                            <img
                                src={cat.image}
                                alt={cat.title}
                                style={{ width: "100%", height: "350px", borderRadius: "12px", objectFit: "fill" }}
                            />
                            <CardContent>
                                <Typography variant="h5" fontWeight={600} mb={1}>
                                    {cat.title}
                                </Typography>
                                <Typography variant="body1" color="text.secondary" mb={2}>
                                    {cat.description}
                                </Typography>
                                <Button variant="contained" onClick={() => navigate(cat.path)}>
                                    View Courses
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
