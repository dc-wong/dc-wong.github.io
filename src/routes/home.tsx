// import type { Route } from "./+types/home";
import React from "react";
// import Link from "react-router-dom/";
import Carousel from "../components/Carousel";
import Publications from "../components/Publications";
// import ListedSection from "../components/Publications";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "New React Router App" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }

export default function Home() {
  const selfImages = [
    "./assets/self/img_1.jpg",
    "./assets/self/img_2.jpg",
    "./assets/self/img_3.jpeg",
    "./assets/self/img_4.jpg",
    "./assets/self/img_5.jpg",
  ];

  const publications = [
    {
      id: 1,
      title: "Shifts in Doctors’ Eye Movements Between Real and AI-Generated Medical Images",
      authors: "David Wong*, Bin Wang*, Gorkem Durak, Marouane Tliba, et al.",
      venue: "ETRA",
      year: 2025,
      links: [
        { label: "Paper", href: "https://arxiv.org/pdf/2504.15007" },
      ],
      image: "./assets/projects/etralogo.png",
    },
    {
      id: 2,
      title: "Eyes Tell the Truth: GazeVal Highlights Shortcomings of Generative AI in Medical Imaging",
      authors: "David Wong*, Bin Wang*, Gorkem Durak, Marouane Tliba, et al.",
      venue: "CVPRW [Oral]",
      year: 2025,
        links: [
        { label: "Paper", href: "https://arxiv.org/pdf/2503.20967" },
        { label: "Project Page", href: "./gazeval" },
      ],
      image: "./assets/projects/gazevallogo.png",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "HALŌ",
      authors: "As a part of the Sanofi Design Innovation Challenge, we designed a large-volume, on-body delivery system to deliver medicine subcutaneously as an alternative to IV infusions which improves the mobility of patients and allows for at-home treatment administration. The design and development of this system is built upon market analysis and patient feedback while avoiding patent infringement. This description is limited as the competition is still in progress.",
      venue: "",
      year: 2025,
      links: [
        { label: "Competition Page", href: "https://sanofi-challenge.web.app/" },
      ],
      image: "./assets/projects/sanofi_logo.jpeg",
    },
    {
      id: 2,
      title: "MILO: Voice-Controlled Robotic Arm",
      authors: "A robotic arm that responds to a user's voice commands to assist paraplegic patients & patients with limited upper limb strength to do daily tasks, such as connect with family via video calling & drink water. My primary contribution is voice recognition & response system by building a microphone that is able to hear the user in noisy environments, optimizing the system for lower costs and a smaller size while maintaining high audio quality, and integrating the system with Arduino's speech recognition. This project made it to RESNA Student Design Challenge Finalist 2024 and recceived an honorable mention from the TOM Global Innovation Challenge 2025.",
      venue: "",
      year: 2025,
      links: [
        { label: "Project Page", href: "https://numedicalmakers.org/project1.html" },
      ],
      image: "./assets/projects/milo_arm.png",
    },
  ];

  return (
    <div style={{ marginTop: 25 }}>
      <div style={{ display: "flex", gap: 20 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "Verdana, sans-serif" }}>
            <b style={{ fontSize: "2.5em", display: "block" }}>David Wong</b>
            <br />
            <span style={{ fontSize: "1.5em" }}>Northwestern University</span>
            <br />
            <span style={{ fontSize: "1.1em" }}>Email: david.wong@u.northwestern.edu</span>
            <br />
            <div style={{ fontSize: "1.1em", marginTop: 10 }}>
              <a href="https://scholar.google.com/citations?user=PFAy4YkAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a> /
              <a href="https://github.com/dc-wong" target="_blank" rel="noopener noreferrer"> Github</a> /
              <a href="https://www.linkedin.com/in/david-c-w-nu2027/" target="_blank" rel="noopener noreferrer"> LinkedIn</a> /
              <a href="./assets/docs/David_Wong_Resume.pdf" target="_blank" rel="noopener noreferrer"> Resume</a>
            </div>
          </div>
        </div>

        <div style={{ width: "35%", textAlign: "center" }}>
          <Carousel images={selfImages} />
        </div>
      </div>

      <h2>About Me</h2>
      <p>
        I am currently a third-year undergraduate student at <a href="https://www.northwestern.edu/" target="_blank">Northwestern University</a> studying biomedical medicacl engineering and computer science. 
        I am currently working in <a href="https://www.regeneron.com/" target="_blank">Regeneron Pharmaceuticals</a> as a Data Engineering Co-op 
        under <a href="https://www.linkedin.com/in/matthew-conway-7a4a5714/" target="_blank">Matthew Conway</a>.
        I conduct research in the <a href="https://bagcilab.com/" target="_blank">Machine and Hybrid Intelligence Lab</a> under <a href="https://scholar.google.com/citations?user=9LUdPM4AAAAJ&hl=en" target="_blank">Proffessor Ulas Bagci</a> as a Research Intern.
      </p>

      <Publications title="Publications" items={publications} />
      <Publications title="Projects" items={projects} />

    </div>
  )
}
