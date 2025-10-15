import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { asset } from "../../utils/asset";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Stat {
    value: string;
    label: string;
}

const stats: Stat[] = [
    { value: "25", label: "Courses offered" },
    { value: "50", label: "Locations" },
    { value: "100", label: "Trainers" },
    { value: "10000", label: "Sessions" },
    { value: "100000", label: "Lives Transformed" },
];

const StatItem: React.FC<{ stat: Stat; index: number }> = ({ stat, index }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // re-trigger when visible again
        threshold: 0.4, // 40% visible to trigger
    });

    return (
        <Grid
            size={{ xs: 12, md: 2.4 }}
            key={index}
            component={motion.div}
            ref={ref}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
        >
            <Typography
                variant="h3"
                sx={{
                    fontWeight: 700,
                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                }}
            >
                {inView && <CountUp end={parseInt(stat.value)} duration={2.5} separator="," suffix="+" />}
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    mt: 1,
                    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                }}
            >
                {stat.label}
            </Typography>
        </Grid>
    );
};

const StatsSection: React.FC = () => {
    return (
        <Box
            sx={{
                bgcolor: "primary.main",
                color: "white",
                py: 8,
                backgroundImage: `url(${asset("/img/PD%20Club/Carousel-1.jpg")})`,
                backgroundSize: "cover",
                backgroundBlendMode: "multiply",
                position: "relative",
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} textAlign="center" justifyContent="center">
                    {stats.map((stat, index) => (
                        <StatItem stat={stat} index={index} key={index} />
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default StatsSection;
