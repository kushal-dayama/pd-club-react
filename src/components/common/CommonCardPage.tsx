import { Box, Container, Grid, Typography, Card, CardMedia, CardContent, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Activity, Blog, Course } from "../../interfaces";

interface CommonCardProps {
    title?: string;
    subtitle?: string;
    entities: Blog[] | Activity[] | Course[];
    showViewMore?: boolean;
}

export default function CommonCard({ title, subtitle, entities, showViewMore = false }: CommonCardProps) {
    const [hovered, setHovered] = useState<number | null>(null);
    const navigate = useNavigate();

    return (
        <Box sx={{ py: 10, backgroundColor: "background.default" }}>
            <Container maxWidth="lg">
                <Box textAlign="center" mb={6}>
                    {title && (
                        <Typography variant="h3" fontWeight={700} mb={1}>
                            {title}
                        </Typography>
                    )}
                    {subtitle && (
                        <Typography variant="body1" color="text.secondary">
                            {subtitle}
                        </Typography>
                    )}
                </Box>

                <Grid container spacing={4}>
                    {entities.map((entity, i) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.3 }}
                                onMouseEnter={() => setHovered(i)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                <Card
                                    sx={{
                                        position: "relative",
                                        borderRadius: 3,
                                        overflow: "hidden",
                                        boxShadow: hovered === i ? 6 : 3,
                                        transition: "all 0.3s ease",
                                        cursor: "link" in entity ? "pointer" : "default",
                                    }}
                                    onClick={() => {
                                        if ("link" in entity) {
                                            navigate(entity.link);
                                        }
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="260"
                                        image={entity.image}
                                        alt={entity.title}
                                        sx={{
                                            objectFit: "cover", // 🆕 ensures proper image fit
                                            filter: hovered === i ? "brightness(60%)" : "brightness(85%)",
                                            transition: "0.4s ease",
                                        }}
                                    />

                                    {/* Overlay actions */}
                                    {/* {hovered === i && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                            style={{
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                height: "100%",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                gap: "12px",
                                                background: "rgba(0,0,0,0.4)",
                                            }}
                                        >
                                            <IconButton
                                                href={entity.image}
                                                target="_blank"
                                                sx={{
                                                    color: "white",
                                                    background: "rgba(255,255,255,0.2)",
                                                    "&:hover": { background: "rgba(255,255,255,0.4)" },
                                                }}
                                            >
                                                <VisibilityIcon />
                                            </IconButton>
                                            <IconButton
                                                href={entity.link}
                                                sx={{
                                                    color: "white",
                                                    background: "rgba(255,255,255,0.2)",
                                                    "&:hover": { background: "rgba(255,255,255,0.4)" },
                                                }}
                                            >
                                                <LinkIcon />
                                            </IconButton>
                                        </motion.div>
                                    )} */}

                                    <CardContent sx={{ textAlign: "center", py: 3 }}>
                                        <Typography variant="h6" fontWeight={600} sx={{ color: "text.primary" }}>
                                            {entity.title}
                                        </Typography>

                                        {entity.subtitle && (
                                            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                                {entity.subtitle}
                                            </Typography>
                                        )}

                                        {/* 🆕 Author & Date */}

                                        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 1.5 }}>
                                            {"author" in entity && entity.author && `By ${entity.author}`}
                                            {"author" in entity && entity.author && "date" in entity && entity.date && " • "}
                                            {"date" in entity &&
                                                entity.date &&
                                                new Date(entity.date).toLocaleDateString(undefined, {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric",
                                                })}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                {showViewMore && (
                    <Box textAlign="center" mt={6}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            sx={{ borderRadius: 3, px: 4, py: 1.5 }}
                            onClick={() => navigate("/blogs")}
                        >
                            View More
                        </Button>
                    </Box>
                )}
            </Container>
        </Box>
    );
}
