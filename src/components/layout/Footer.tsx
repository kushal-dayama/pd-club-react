import React from "react";
import { Box, Container, Grid, Typography, IconButton, Button, Divider } from "@mui/material";
import { YouTube, Facebook, LinkedIn, Instagram } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: "grey.900",
                color: "white",
                py: 6,
                mt: "auto",
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="h6" gutterBottom>
                            Follow Us
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                            <IconButton
                                size="small"
                                sx={{ color: "white", border: "1px solid white" }}
                                href="https://www.youtube.com/channel/UC0j5pfja-u_qvUhb82wCRZQ"
                                target="_blank"
                            >
                                <YouTube />
                            </IconButton>
                            <IconButton
                                size="small"
                                sx={{ color: "white", border: "1px solid white" }}
                                href="https://www.facebook.com/profile.php?id=100087788884562"
                                target="_blank"
                            >
                                <Facebook />
                            </IconButton>
                            <IconButton
                                size="small"
                                sx={{ color: "white", border: "1px solid white" }}
                                href="https://www.linkedin.com/in/pd-club-4545aa256"
                                target="_blank"
                            >
                                <LinkedIn />
                            </IconButton>
                            <IconButton
                                size="small"
                                sx={{ color: "white", border: "1px solid white" }}
                                href="https://www.instagram.com/pdclub_official/"
                                target="_blank"
                            >
                                <Instagram />
                            </IconButton>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="h6" gutterBottom>
                            Our Courses
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Button color="inherit" component={Link} to="/courses/technical" sx={{ justifyContent: "flex-start", textAlign: "left" }}>
                                Technical Courses
                            </Button>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/courses/personality-development"
                                sx={{ justifyContent: "flex-start", textAlign: "left" }}
                            >
                                Personality Development Courses
                            </Button>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <Button color="inherit" component={Link} to="/about" sx={{ justifyContent: "flex-start", textAlign: "left" }}>
                                About Us
                            </Button>
                            <Button color="inherit" component={Link} to="/contact" sx={{ justifyContent: "flex-start", textAlign: "left" }}>
                                Contact Us
                            </Button>
                            <Button color="inherit" component={Link} to="/blogs" sx={{ justifyContent: "flex-start", textAlign: "left" }}>
                                Blogs
                            </Button>
                        </Box>
                    </Grid>

                    {/* <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Newsletter
            </Typography>
            <Typography variant="body2" paragraph>
              Improve your Competence, Culture and Character
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <TextField
                size="small"
                placeholder="Your email"
                sx={{
                  bgcolor: 'white',
                  borderRadius: 1,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: 'none',
                    },
                  },
                }}
              />
              <Button variant="contained" color="primary">
                Sign Up
              </Button>
            </Box>
                      </Grid> */}
                </Grid>

                <Divider sx={{ my: 3, bgcolor: "grey.700" }} />

                <Typography variant="body2" textAlign="center">
                    © pdclub.in, All Right Reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
