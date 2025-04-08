import abilities from "@/public/images/Resume/abilities.svg";
import education from "@/public/images/Resume/education.svg";
import interests from "@/public/images/Resume/interests.svg";
import programmingSkills from "@/public/images/Resume/programming-skills.svg";
import workHistory from "@/public/images/Resume/work-history.svg";

export const resumeBullets = [
    { label: "Education", image: education },
    { label: "Work History", image: workHistory },
    { label: "Skills", image: programmingSkills },
    { label: "Abilities", image: abilities },
    { label: "Interests", image: interests },
];

export const educationDetails = [
    {
        heading: "UTYCC - University of Technology (Yatanarpon Cyber City)",
        subHeading: "BACHELOR OF ENGINEERING IN INFORMATION SCIENCE AND TECHNOLOGY",
        fromDate: "2013",
        toDate: "2019",
        courseHighlights: {
            title: "Course Highlights:",
            highlights: [
                "Object-Oriented Design with UML",
                "Data Mining & Big Data Analysis",
                "Database Management System",
                "Introduction to IoT",
                "Distributed System & Cloud Computing",
                "Software Engineering",
                "Mobile development with java and android studio",
                "Artificial Intelligence",
                "Business Strategy & IT",
            ],
        },
    },
];

export const workHistoryDetails = [
    {
        heading: "Partners Home Co., Ltd",
        subHeading: "Senior Software Engineer",
        fromDate: "2022",
        toDate: "2024",
        details: [
            "- Developed the full-stack web applications",
            "- Used most of JavaScript frameworks such as React.js, Next.js, Vue.js, Express.js, etc.",
            "- Played a role as a Frontend Lead Developer.",
        ],
    },
    {
        heading: "Aceplus Co., Ltd",
        subHeading: "Junior Software Engineer",
        fromDate: "2020",
        toDate: "2022",
        details: [
            "- Developed Mobile Applications using React Native and front-end web applications using React.js",
            "- Maintained front-end web applications using Angular.js and mobile applications using React Native.",
            "- Played a role as a JavaScript full-stack Developer (Frontend heavy).",
        ],
    },
    {
        heading: "Marter Solution Co., Ltd",
        subHeading: "DEVELOPER INTERN",
        fromDate: "2018",
        toDate: "2019",
        details: [
            "- Played as a MERN stack developer",
            "- Developed e-commerce(trading) web apps",
            "- Used React, Expressjs, MySQL and MongoDB",
        ],
    },
    {
        heading: "Orient Co., Ltd",
        subHeading: "DEVELOPER INTERN",
        fromDate: "2016",
        toDate: "2016",
        details: [
            "- Played as a Software Tester",
            "- Pair programming as java developer",
        ],
    },
];

export const skillsDetails = {
    proficientSkills: {
        title: "Proficient in",
        skills: [
            { skill: "HTML, CSS", ratingPercentage: 90 },
            { skill: "JavaScript", ratingPercentage: 90 },
            { skill: "React.js", ratingPercentage: 90 },
            { skill: "Next.js", ratingPercentage: 85 },
            { skill: "Redux, Redux Toolkit", ratingPercentage: 85 },
            { skill: "Tailwind CSS, Shadcn", ratingPercentage: 80 },
            { skill: "React Native", ratingPercentage: 80 },
            { skill: "TypeScript", ratingPercentage: 80 },
            { skill: "Express.js", ratingPercentage: 70 },
        ]
    },
    familiarSkills: {
        title: "Familiar with",
        skills: [
            { skill: "Core Java", ratingPercentage: 55 },
            { skill: "MySQL", ratingPercentage: 55 },
            { skill: "Angular.js", ratingPercentage: 50 },
            { skill: "Vue.js", ratingPercentage: 50 },
            { skill: "MongoDB", ratingPercentage: 50 },
            { skill: "Android(Java)", ratingPercentage: 30 },
            { skill: "Core Python", ratingPercentage: 30 },
            { skill: "Figma", ratingPercentage: 30 },
            { skill: "Adobe XD", ratingPercentage: 30 },
        ]
    },
};

export const abilitiesDetails = {
    title: "Abilities",
    abilities: [
        "Self-motivation, self-study, and collaboration.",
        "Intermediate level in English speaking, listening, reading and writing.",
        "Knowledge on both Functional Programming and Object-Oriented Programming.",
        "Experience on project management tools such as <strong>Jira, Confluence</strong> and <strong>Teamspirit</strong>.",
        "Experience on modern technologies related to React.js such as <strong>Vite, NextAuth, Clerk, Stripe, Storybook, zod, react-hook-form, Zustand, Tanstack, React Router, Supabase</strong> and <strong>Prisma</strong>.",
        "Familiarity with build tools such as Webpack, Babel, and Vite.",
        "Familiarity with various JavaScript runtime environments such as Node.js, Bun, etc.",
        "Experience and knowledge on implementing android applications.",
        "Experience and knowledge on various Operating Systems (Linux, Windows, IOS and Android).",
        "Experience and knowledge on using Git, GitHub and GitLab.",
        "Experience and knowledge on Databases, REST API and Web development.",
        "Experience and knowledge on DevOps field (Bash Scripting, Configuration Management (Ansible), CI/CI, Container Technology (Docker), Kubernetes, Infrastructure Automation with Terraform) for various environments (DEV, STG, UAT, PROD, etc).",
        "Experience and knowledge on Cloud Computing Services (AWS, Azure, GCP, DigitalOcean, Vercel, etc. But mostly AWS).",
        "A little experience and knowledge on Machine Learning (saving, restoring and exporting models) using Python and TensorFlow framework."
    ],
};

export const interestsDetails = [
    {
        heading: "Playing football",
        description: "Since in my childhood, my most favorite game is playing football. I got injury( broken my right leg ) when I was 13 years old. So, I took a little rest from playing football. When I recovered, I replayed football. But unfortunately, my left leg was also broken when I was 17 years old. After that, I can't no more well play football. But I am sill playing as much as I can even I am not good at now.",
    },
    {
        heading: "Music",
        description: "I played guitar about many years ago since I was 13 years old. Especially, I like modern rock music and acoustic music type. And I play guitar and sing as the best stress reliever.",
    },
    {
        heading: "Competitive Gaming",
        description: "I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most.",
    },
];