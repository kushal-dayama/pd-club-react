import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import BackToTop from "./components/common/BackToTop";
import Home from "./pages/Home";
import Blog1 from "./pages/Blogs/Blog1";
import Blog2 from "./pages/Blogs/Blog2";
import Blog3 from "./pages/Blogs/Blog3";
import Blog4 from "./pages/Blogs/Blog4";
import Blog5 from "./pages/Blogs/Blog5";
import Blog6 from "./pages/Blogs/Blog6";
import AllBlogs from "./pages/Blogs/Blogs";
import Team from "./components/Team";
import Clientele from "./pages/Clientele";
import About from "./pages/About";
import Activities from "./pages/Activities";
import CoursesLanding from "./pages/Courses/CoursesLanding";
import TechnicalCourses from "./pages/Courses/TechnicalCourses";
import PersonalityDevelopmentCourses from "./pages/Courses/PersonalityDevelopmentCourses";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
    return (
        <Router basename="/pd-club-react/">
            <ScrollToTop />

            <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                <Navbar />
                <Box component="main" sx={{ flexGrow: 1 }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="blogs">
                            {/* Nested routes */}
                            <Route index element={<AllBlogs />} />
                            <Route path="1" element={<Blog1 />} />
                            <Route path="2" element={<Blog2 />} />
                            <Route path="3" element={<Blog3 />} />
                            <Route path="4" element={<Blog4 />} />
                            <Route path="5" element={<Blog5 />} />
                            <Route path="6" element={<Blog6 />} />
                        </Route>

                        <Route path="courses">
                            {/* Nested routes */}
                            <Route index element={<CoursesLanding />} />
                            <Route path="technical" element={<TechnicalCourses />} />
                            <Route path="personality-development" element={<PersonalityDevelopmentCourses />} />
                        </Route>

                        <Route path="/team" element={<Team />} />
                        <Route path="/clientele" element={<Clientele />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/activities" element={<Activities />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Box>
                <Footer />
                <BackToTop />
            </Box>
        </Router>
    );
}

export default App;
