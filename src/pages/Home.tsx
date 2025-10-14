import React from "react";
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import AboutSection from "../components/home/AboutSection";
import StatsSection from "../components/home/StatsSection";
import CoursesSection from "../components/home/CoursesSection";
import ClienteleSection from "../components/home/ClienteleSection";
import Testimonials from "../components/home/Testimonials";
import RecentBlogs from "../components/home/RecentBlogs";

const Home: React.FC = () => {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <AboutSection />
            <StatsSection />
            <CoursesSection />
            <ClienteleSection />
            <RecentBlogs/>
            <Testimonials/>
        </>
    );
};

export default Home;
