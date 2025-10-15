import type { Course } from "../interfaces";
import { asset } from "../utils/asset";

export const technicalCourses: Course[] = [
    {
        title: "Java Programming",
        subtitle: "An introductory course to the programming basics of Java Programming Language.",
        image: asset("/img/courses/technical/java.jpeg"),
    },
    {
        title: "Python Programming",
        subtitle: "An introductory course to the programming basics of Python Language.",
        image: asset("/img/courses/technical/python.jpeg"),
    },
    {
        title: "CAD/CAM",
        subtitle: "An introductory course to designing using CAD/CAM software tools.",
        image: asset("/img/courses/technical/cad-cam.jpg"),
    },
    {
        title: "BIW",
        subtitle: "An introductory course to the basics of BIW by experienced faculties, focusing on practical scenarios.",
        image: asset("/img/courses/technical/biw.jpg"),
    },
    {
        title: "Matlab Programming",
        subtitle: "An introductory course to the programming basics of Matlab Programming Language with coding sessions.",
        image: asset("/img/courses/technical/matlab.png"),
    },
    {
        title: "ML with PySpark",
        subtitle: "A Machine Learning course using PySpark with Big Data applications by IIT KGP.",
        image: asset("/img/courses/technical/ml.jpg"),
    },
    {
        title: "Microsoft Azure",
        subtitle: "A course related to Microsoft Azure Infrastructure and Development Training by IIT KGP.",
        image: asset("/img/courses/technical/azure.jpg"),
    },
    {
        title: "Data Structures in Python",
        subtitle: "A course designed to learn Data Structures in Python by IIT KGP.",
        image: asset("/img/courses/technical/dsa.jpg"),
    },
];

export const personalityDevelopmentCourses: Course[] = [
    {
        title: "Discover Yourself",
        subtitle: "An 8-session certified introductory course with engaging sessions and activities to help you unveil 'The Real You'.",
        image: asset("/img/courses/personality-development/discover-yourself.jpg"),
    },
    {
        title: "Principle Centered Leadership",
        subtitle: "A course that explores the essential qualities required for long-term, sustainable, and inspiring leadership.",
        image: asset("/img/courses/personality-development/leadership.jpeg"),
    },
    {
        title: "Positive Thinker",
        subtitle: "A special course designed to reshape your mindset and give you a positive outlook towards life.",
        image: asset("/img/courses/personality-development/positive-thinker.jpg"),
    },
];
