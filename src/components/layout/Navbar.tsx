import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Menu,
    MenuItem,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "../common/ThemeToggle";
import { asset } from "../../utils/asset";

const Navbar: React.FC = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation(); // <-- Get current route
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [mobileOpen, setMobileOpen] = useState(false);
    const [coursesAnchor, setCoursesAnchor] = useState<null | HTMLElement>(null);

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
    const handleCoursesClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setCoursesAnchor(event.currentTarget);
    };
    const handleCoursesClose = () => setCoursesAnchor(null);

    const navItems = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Activities", path: "/activities" },
        { label: "Clientele", path: "/clientele" },
        { label: "Blogs", path: "/blogs" },
        { label: "Team", path: "/team" },
        { label: "Contact", path: "/contact" },
        ...(isMobile ? [{ label: "Courses", path: "/courses" }] : []), // <-- Only for mobile
    ];

    const isActive = (path: string) => {
        return location.pathname === path || location.pathname.startsWith(path + "/");
    };

    return (
        <>
            <AppBar position="sticky" color="default" elevation={1}>
                <Toolbar>
                    <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
                        <Box component={Link} to="/" sx={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}>
                            <Box component="img" src={asset("/img/logo.png")} alt="PD Club Logo" sx={{ height: 50, mr: 2 }} />
                            <Box
                                component="h1"
                                sx={{
                                    fontSize: { xs: "1rem", md: "1.5rem" },
                                    fontWeight: 600,
                                    margin: 0,
                                }}
                            >
                                {isMobile ? "PD Club" : "Personality Development Club"}
                            </Box>
                        </Box>
                    </Box>

                    {!isMobile && (
                        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                            {navItems.map((item) => (
                                <Button
                                    key={item.label}
                                    component={Link}
                                    to={item.path}
                                    color="inherit"
                                    sx={{
                                        fontWeight: isActive(item.path) ? "bold" : "normal",
                                        borderBottom: isActive(item.path) ? `2px solid ${theme.palette.primary.main}` : "none",
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                            <Button
                                color="inherit"
                                onClick={handleCoursesClick}
                                endIcon={<KeyboardArrowDownIcon />}
                                sx={{
                                    fontWeight: isActive("/courses") ? "bold" : "normal",
                                    borderBottom: isActive("/courses") ? `2px solid ${theme.palette.primary.main}` : "none",
                                }}
                            >
                                Courses
                            </Button>
                            <Menu anchorEl={coursesAnchor} open={Boolean(coursesAnchor)} onClose={handleCoursesClose}>
                                <MenuItem
                                    onClick={() => {
                                        handleCoursesClose();
                                        navigate("/courses/technical");
                                    }}
                                >
                                    Technical Courses
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        handleCoursesClose();
                                        navigate("/courses/personality-development");
                                    }}
                                >
                                    Personality Development
                                </MenuItem>
                            </Menu>
                            <ThemeToggle />
                        </Box>
                    )}

                    {isMobile && (
                        <Box sx={{ display: "flex", gap: 1 }}>
                            <ThemeToggle />
                            <IconButton color="inherit" edge="end" onClick={handleDrawerToggle}>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>

            <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
                <Box sx={{ width: 250 }}>
                    <List>
                        {navItems.map((item) => (
                            <ListItem key={item.label} disablePadding>
                                <ListItemButton
                                    component={Link}
                                    to={item.path}
                                    onClick={handleDrawerToggle}
                                    sx={{
                                        fontWeight: isActive(item.path) ? "bold" : "normal",
                                        backgroundColor: isActive(item.path) ? theme.palette.action.selected : "inherit",
                                    }}
                                >
                                    <ListItemText primary={item.label} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default Navbar;
