import React from "react";
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

interface Course {
    title: string;
    image: string;
    description: string;
}

const courses: Course[] = [
    {
        title: "Technical Courses",
        image: "/img/technical.jpg",
        description: "We offer cutting edge technical courses by reputed institutions and faculties",
    },
    {
        title: "Life's Amazing Secrets",
        image: "/img/life-secrets.png",
        description: 'This is an 8 session certified introductory course to help you unveil "The Real You"',
    },
    {
        title: "Principled Centered Leadership",
        image: "/img/principle-leadership.jpg",
        description: "This course explores the essential qualities that are required for a long sustainable inspiring leadership",
    },
    {
        title: "Positive Thinker",
        image: "/img/positive-thinker.jpg",
        description: "Special course designed to change your thinking and giving a positive outlook towards life",
    },
];

const CoursesSection: React.FC = () => {
    return (
        <Container maxWidth="lg" sx={{ my: 8 }}>
            <Box textAlign="center" mb={6}>
                <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 600 }}>
                    Our Courses
                </Typography>
            </Box>
            <Grid container spacing={4}>
                {courses.map((course, index) => (
                    <Grid size={{ xs: 12, md: 4 }} key={index}>
                        <Card
                            sx={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                transition: "transform 0.3s, box-shadow 0.3s",
                                "&:hover": {
                                    transform: "translateY(-8px)",
                                    boxShadow: 6,
                                },
                            }}
                        >
                            <CardMedia component="img" height="200" image={course.image} alt={course.title} />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" gutterBottom>
                                    {course.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {course.description}
                                </Typography>
                                <Button size="small" sx={{ mt: 2 }} component={Link} to="/courses">
                                    Read More
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default CoursesSection;
