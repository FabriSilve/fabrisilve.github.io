import {defineStore} from "pinia";
import {ProjectStore} from "../types/typings";

// @ts-ignore
const images: Record<string, string> = import.meta.glob("../assets/featured/*.{png,jpg}", {as: 'url', eager: true});
// @ts-ignore
const pdfs: Record<string, string> = import.meta.glob("../assets/pdf/*.pdf", {as: 'url', eager: true});

export const useProjectStore = defineStore<string, ProjectStore>("projectStore", () => {
    const projects = [
        {
            id: 1,
            name: "Scrum Review Dashboard",
            image: images["../assets/featured/scrum_dashboard.png"],
            description: "A Dashboard to support the visualisation of the work done by a team during a Scrum Sprint based on Notion APIs.",
            tech: ["React", "Tremor", "NodeJs", "Docker"],
            link: "https://github.com/FabriSilve/notion-scrum-chart",
            featured: true,
        },
        {
            id: 2,
            name: "Teammate",
            image: images["../assets/featured/teammate.png"],
            description: "A CLI tool to support the workflow in the team of my company. It allows to automate the deployment of new pull requests and the notification of colleagues.",
            tech: ["Ruby", "Shell"],
            link: "https://github.com/FabriSilve/TeamMate",
        },
        {
            id: 3,
            name: "Reddit Client",
            image: images["../assets/featured/reddit.png"],
            description: "Project to speriment with the Angular framework and the Reddit API. It's a simple client to browse Reddit posts.",
            tech: ["Angular", "Typescript", "TsLint"],
            link: "https://github.com/FabriSilve/RedditTest",
            featured: true,
        },
        {
            id: 4,
            name: "Npm Vulnerability Report",
            image: images["../assets/featured/nvr.png"],
            description: "CLI tool developed to support the monthly task of checking the vulnerabilities of the company's NodeJs projects. It automatically scan all the packages included in a project and return a table format output of the vulnerabilities included to support an analysis of the critical ones.",
            tech: ["NodeJS", "Shell"],
            link: "https://github.com/FabriSilve/npm-vulnerability-report",
        },
        {
            id: 5,
            name: "M.A.R.S.",
            image: images["../assets/featured/mars.png"],
            description: "Customised linux services to support remote work on the company's servers. The project is based on the use of shell scripts and the Linux service manager. The tool was responsible to notify the user about the status of the server and its resources usage.",
            tech: ["Shell", "Linux Service"],
            link: "https://github.com/FabriSilve/mars",
        },
        {
            id: 6,
            name: "Meteors",
            image: images["../assets/featured/meteors.png"],
            description: "A multiplayer game developed to test the socket.io library and the use of the canvas element. The game is a simple clone a famous arcade game. The interesting addition is the controller that is hosted on the player phone meanwhile the game is displayed on the computer screen. This was a nice way to rest some minutes with the colleagues during the work break.",
            tech: ["Shell", "Linux Service"],
            link: "https://github.com/FabriSilve/teammate-arcade",
        },
    ];

    const grave = [
        {
            id: 1,
            name: "Thesis: Framework Angular",
            image: images["../assets/featured/PocketIFM.jpg"],
            description: "The main aim of the project was develop a web application that exemplified how use company web api.",
            tech: ["Angular", "NodeJs", "CSS3"],
            link: "https://fabrisilve.github.io/PocketIFM",
        },
        {
            id: 2,
            name: "Aquarium Administrator Software",
            image: images["../assets/featured/acquarium.jpg"],
            description: "Acquarium Dashboard to monitor presence of users registered with the client app in the different rooms. The App allowed the customer to read the information about the rooms and they could move following paths.",
            tech: ["Java", "Swing"],
            link: "https://github.com/FabriSilve/PCAD_Project",
            featured: false,
        },
        {
            id: 3,
            name: "Library for Travel Agency",
            image: images["../assets/featured/travel_library.jpg"],
            description: "The project is a simplified solution to the problem of planning trips between cities and it consists of two related components. The Travel Company Component is used to manage confederations of Travel Companies, any Travel Company is a provider of point-to-point path. The Planner Component uses Travel Companies to plan a multi-hops trips between cities. With this project I became familiar with the C# language and Test Driven Development.",
            tech: ["C#", "EntityFramework", "Ninject", "NUnit", "SQLExpress"],
            link: "https://github.com/FabriSilve/TAP1718_Laboratorio3_Git",
            featured: false,
        },
        {
            id: 4,
            name: "EventAround",
            image: images["../assets/featured/eventaround.jpg"],
            description: "The application allows the user to search events on a map.Users can add new events and manage them. They could report their interest, following events and view the profiles of other users. The project also contains a reserved part for administrators.",
            tech: ["PHP", "MySQL", "HTML5", "CSS3", "Bootstrap", "JS", "AJAX"],
            link: pdfs["../assets/pdf/eventaround.pdf"],
            featured: false,
        },
        {
            id: 5,
            name: "EventAround App",
            image: images["../assets/featured/eventaroundapp.png"],
            description: "The application allows the user to search for events and add them to the system. It also has the functionality of notifying followed events news and other features.",
            tech: ["Android", "Java", "MySQLi"],
            link: pdfs["../assets/pdf/eaapp.pdf"],
            featured: false,
        },
    ]

    return {
        getAllProjects: projects.slice(),
        getFeaturedProjects: projects.filter((project) => project.featured),
        getGraveProjects: grave.slice(),
    };
})

