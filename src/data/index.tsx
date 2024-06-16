import insta from "../../public/insta.svg"
import linkedin from "../../public/linkedin.svg"

import aws from "../../public/tech-icons/AWS-Dark.svg";
import java from "../../public/tech-icons/Java-Dark.svg";
import js from "../../public/tech-icons/JavaScript.svg";
import mysql from "../../public/tech-icons/MySQL-Dark.svg";
import psql from "../../public/tech-icons/PostgreSQL-Dark.svg";
import njs from "../../public/tech-icons/NextJS-Dark.svg";
import postman from "../../public/tech-icons/Postman.svg";
import python from "../../public/tech-icons/Python-Dark.svg";
import rjs from "../../public/tech-icons/React-Dark.svg";
import spring from "../../public/tech-icons/Spring-Dark.svg";
import tailwind from "../../public/tech-icons/TailwindCSS-Dark.svg";
import github from "../../public/tech-icons/Github-Dark.svg";
import webstorm from "../../public/tech-icons/WebStorm-Dark.svg";
import vitest from "../../public/tech-icons/Vitest-Dark.svg";
import vscode from "../../public/tech-icons/VSCode-Dark.svg";
import actions from "../../public/tech-icons/GithubActions-Dark.svg";
import bash from "../../public/tech-icons/Bash-Dark.svg";
import firebase from "../../public/tech-icons/Firebase-Dark.svg";
import linux from "../../public/tech-icons/Linux-Dark.svg";
import ts from "../../public/tech-icons/TypeScript.svg";
import electron from "../../public/tech-icons/Electron.svg";
import fastapi from "../../public/tech-icons/FastAPI.svg";
import sass from "../../public/tech-icons/Sass.svg";
import dj from "../../public/tech-icons/Django.svg";
import docker from "../../public/tech-icons/Docker.svg";
import mui from "../../public/tech-icons/MaterialUI-Dark.svg";

import project1Img from "../../public/vendo-print.png"
import project2Img from "../../public/car-rental.png"
import project3Img from "../../public/student-grievance.png"
import project4Img from "../../public/chat-docx.png"

export const navigationItems = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Guestbook",
        href: "/guestbook",
    },
    {
        name: "Projects",
        href: "/projects",
    },
    {
        name: "Chat",
        href: "/chat",
    },
];

export const socialMedia = [
    {
        id: 1,
        icon: github,
        name: "Github",
        username: "@100percentBAKA",
        link: "https://www.github.com/100percentBAKA",
    },
    {
        id: 2,
        icon: linkedin,
        name: "Linkedin",
        username: "@adarshgs",
        link: "https://www.linkedin.com/in/adarshgs/",
    },
    {
        id: 3,
        icon: insta,
        name: "Instagram",
        username: "@adarshgs",
        link: "http://www.instagram.com",
    },
];

export const icons = [
    actions,
    aws,
    bash,
    dj,
    docker,
    electron,
    fastapi,
    firebase,
    github,
    java,
    js,
    linux,
    mui,
    mysql,
    njs,
    postman,
    psql,
    python,
    rjs,
    sass,
    spring,
    tailwind,
    ts,
    vitest,
    vscode,
    webstorm,
];

export const projects = [
    {
        title: "VendO-Print",
        _id: "1",
        image: project1Img,
        tags: ["React", "Django", "AWS", "Raspberry Pi"],
        description:
            "Full Stack application which aims to revolutionize the way printing services are provided in public spaces. It utilizes a Raspberry Pi as a print server and a React front-end for users to upload and print documents seamlessly.",
        link: "https://www.github.com/100percentBAKA",
    },
    {
        title: "Car Rental Portal",
        _id: "2",
        image: project2Img,
        tags: ["React", "Spring Boot", "AWS", "MUI"],
        description:
            "A full-stack web application for renting cars. Built with React for the front-end, Spring Boot for the back-end, and hosted on AWS. It features a user-friendly interface with material design (MUI), secure authentication, car search and filtering, booking management, and an admin panel for managing the car fleet and rental operations.",
        link: "https://project2.example.com",
    },
    {
        title: "Student Grievance Portal",
        _id: "3",
        image: project3Img,
        tags: ["React", "Spring Boot", "AWS", "MUI"],
        description:
            "A web-based platform that allows students to register their grievances, complaints, or suggestions regarding academic or administrative issues. Built with React for the front-end, Spring Boot for the back-end, and hosted on AWS. It features a material design (MUI) interface, secure authentication, grievance submission and tracking, and an admin panel for managing and resolving grievances.",
        link: "https://project3.example.com",
    },
    {
        title: "Chat with Documentation",
        _id: "4",
        image: project4Img,
        tags: ["Langchain", "Streamlit", "Ollama", "Gemini"],
        description:
            "A conversational AI assistant that can answer questions and provide information based on a given set of documents or data sources. Built using Langchain for natural language processing, Streamlit for the web interface, and leveraging the capabilities of OpenAI's language models. It also utilizes the Gemini database for efficient data retrieval and indexing.",
        link: "https://project4.example.com",
    },
    // Add more project objects as needed
];
