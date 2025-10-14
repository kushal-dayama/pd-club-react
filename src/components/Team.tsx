import { Box, Container, Grid, Card, CardContent, Typography, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { teamMembers } from "../constants/team-memebers";

export default function Team() {
    return (
        <Box sx={{ py: 10, backgroundColor: "background.default" }}>
            <Container maxWidth="xl">
                <Typography variant="h3" fontWeight={700} textAlign="center" mb={2}>
                    Our Team
                </Typography>

                <Typography variant="h6" color="primary" textAlign="center" mb={6} sx={{ maxWidth: 800, mx: "auto" }}>
                    All our courses are designed, developed and delivered by experienced faculties and industry professionals.
                </Typography>

                <Grid container spacing={3}>
                    {teamMembers.map((member, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                style={{ justifySelf: "center" }}
                            >
                                <Card
                                    sx={{
                                        p: 4,
                                        borderRadius: 3,
                                        textAlign: "center",
                                        height: 270, // fixed uniform height for all cards
                                        width: 270,
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        boxShadow: 3,
                                        "&:hover": {
                                            transform: "translateY(-8px)",
                                            transition: "0.3s",
                                            boxShadow: 6,
                                        },
                                    }}
                                >
                                    <Avatar
                                        src={member.image}
                                        alt={member.name}
                                        sx={{
                                            width: 100,
                                            height: 100,
                                            mb: 2,
                                            border: "3px solid",
                                            borderColor: "primary.main",
                                        }}
                                    />
                                    <CardContent sx={{ p: 0 }}>
                                        <Typography variant="h6" fontWeight={600}>
                                            {member.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                            {member.title}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
