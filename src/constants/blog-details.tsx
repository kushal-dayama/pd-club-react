import type { Blog } from "../interfaces";

export const recentBlogs: Blog[] = [
    {
        title: "Where Technology Falls Short",
        subtitle: "Exploring the limits of technology and the importance of spiritual balance in modern life.",
        image: "/img/blogs/blog-1.jpeg",
        link: "/blogs/1",
        author: "Team PD Club",
        date: "February 05, 2021",
    },
    {
        title: "Is Something Missing in Modern Education?",
        subtitle: "We have controlled machines and uncontrolled men. Are we missing something crucial in our education system?",
        image: "/img/blogs/blog-2.jpeg",
        link: "/blogs/2",
        author: "Team PD Club",
        date: "January 15, 2021",
    },
    {
        title: "Science of Values",
        subtitle: "Learn importance and science behind the values which help us in today's modern age.",
        image: "/img/blogs/blog-3.jpeg",
        link: "/blogs/3",
        author: "Team PD Club",
        date: "May 19, 2021",
    },
];

export const allBlogs: Blog[] = [
    ...recentBlogs,
    {
        title: "The Unparalleled Story",
        author: "Team PD Club",
        date: "JJuly 1, 2021",
        image: "/img/blogs/blog-4.jpeg",
        link: "/blogs/4",
        subtitle: `Explore the unparalled factory of nature in the form of answer to the question "Does Nature Work Automatically?"`,
    },
    {
        title: "The 99 Club",
        author: "Team PD Club",
        date: "March 10, 2021",
        image: "/img/blogs/blog-5.jpg",
        link: "/blogs/5",
        subtitle: "The Endless Chase for That One Missing Piece.",
    },
    {
        title: "Inspiring Others",
        author: "Team PD Club",
        date: "June 23, 2021",
        image: "/img/blogs/blog-6.jpeg",
        link: "/blogs/6",
        subtitle: "Learn how to inspire others with interesting examples.",
    },
];
