import React from "react";
import { Box, Container, Grid, Typography, Button, Stack, Paper } from "@mui/material";
import { asset } from "../../utils/asset";
import { Link } from "react-router-dom";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";

const AboutSection: React.FC = () => {
    return (
        <>
            <Box sx={{ bgcolor: "background.paper", py: 8 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        {/* Left Image */}
                        <Grid size={{ xs: 12, md: 3 }}>
                            <Box
                                component="img"
                                src={asset("/img/about-pd-club.jpg")}
                                alt="About PD Club"
                                sx={{ width: "100%", borderRadius: 2, boxShadow: 3 }}
                            />
                        </Grid>

                        {/* Center Content */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="h3" gutterBottom color="primary" sx={{ fontWeight: 700 }}>
                                About PD Club
                            </Typography>

                            <Typography variant="body1" paragraph>
                                PD Club is a group of successful & selfless individuals from various IITs and NITs, who have a passion to serve the
                                student community. The balance of personal success & selfless service is what the group strives for.
                            </Typography>

                            <Typography variant="body1" paragraph>
                                We started as a small group of few individuals in 2010 but have now extended our reach to many institutions and
                                corporates giving many technical and personality development seminars. Pracheta has successfully collaborated with
                                many institutes, like IITD, IITKGP, IITH, NITW, COEP, SGGS, University of Melbourne and companies like ITAkash,
                                Konsoft, Mescon.
                            </Typography>

                            <Button variant="contained" size="large" component={Link} to="/about" sx={{ mt: 2, px: 4, py: 1.5 }}>
                                Learn More
                            </Button>
                        </Grid>

                        {/* Right Side Stats */}
                        <Grid size={{ xs: 12, md: 3 }}>
                            <Stack spacing={4}>
                                <Box sx={{ borderLeft: 3, borderColor: "primary.main", pl: 3 }}>
                                    <EmojiEventsIcon
                                        sx={{
                                            fontSize: 40,
                                            color: "primary.main",
                                            mb: 1.5,
                                        }}
                                    />
                                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                                        Numbers Speak
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        More than 100+ trainers offered 10000+ sessions in different parts of the world.
                                    </Typography>
                                </Box>

                                <Box sx={{ borderLeft: 3, borderColor: "primary.main", pl: 3 }}>
                                    <GroupsIcon
                                        sx={{
                                            fontSize: 40,
                                            color: "primary.main",
                                            mb: 1.5,
                                        }}
                                    />
                                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                                        Dedicated Team
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Our team offers more than 25+ courses at 50+ locations.
                                    </Typography>
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box
                sx={{
                    position: "relative",
                    py: { xs: 6, md: 10 },
                    backgroundImage: `url(${asset("/images/backgrounds/success-story.jpg")})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    color: "text.primary",
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        {/* Left Side - Video */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box
                                sx={{
                                    position: "relative",
                                    overflow: "hidden",
                                    borderRadius: 3,
                                    boxShadow: 3,
                                    aspectRatio: "16 / 9",
                                }}
                            >
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/7wqf49T3yag"
                                    title="PD Club Activities and Programs"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                    }}
                                ></iframe>
                            </Box>
                        </Grid>

                        {/* Right Side - Text Content */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Paper
                                elevation={4}
                                sx={{
                                    p: { xs: 3, md: 5 },
                                    borderRadius: 3,
                                    bgcolor: "background.paper",
                                    backdropFilter: "blur(6px)",
                                }}
                            >
                                <Typography variant="h4" fontWeight={700} gutterBottom color="primary">
                                    PD Club: Activities and Programs
                                </Typography>
                                <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                                    Over the past few years, for the welfare of the student community we have conducted many character-building and
                                    technical workshops in various institutes and companies.
                                </Typography>
                                <Typography variant="body1" sx={{ lineHeight: 1.7, mt: 2 }}>
                                    Have a look at various activities and programs that we have held in the past year through this short video.
                                    Despite the COVID situation, our enthusiasm remained high, allowing us to reach more students and benefit many
                                    through our courses and seminars.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default AboutSection;
