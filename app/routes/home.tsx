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
    "/assets/self/img_1.jpg",
    "/assets/self/img_2.jpg",
    "/assets/self/img_3.jpeg",
    "/assets/self/img_4.jpg",
    "/assets/self/img_5.jpg",
  ];

  const publications = [
    {
      id: 1,
      title: "Shifts in Doctors’ Eye Movements Between Real and AI-Generated Medical Images",
      authors: "David Wong*, Bin Wang*, Gorkem Durak, Marouane Tliba, et al.",
      venue: "ETRA 2025",
      year: 2025,
      links: [
        { label: "Paper", href: "https://arxiv.org/pdf/2504.15007" },
      ],
      image: "/assets/projects/etralogo.png",
    },
    {
      id: 2,
      title: "Eyes Tell the Truth: GazeVal Highlights Shortcomings of Generative AI in Medical Imaging",
      authors: "David Wong*, Bin Wang*, Gorkem Durak, Marouane Tliba, et al.",
      venue: "CVPRW 2025 [Oral]",
      year: 2025,
      links: [
        { label: "Paper", href: "https://arxiv.org/pdf/2503.20967" },
        { label: "Project Page", href: "/projects/GazeVal/index.html" },
      ],
      image: "/assets/projects/gazevallogo.png",
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
              <a href="/assets/docs/David_Wong_Resume.pdf" target="_blank" rel="noopener noreferrer"> Resume</a>
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

      <Publications items={publications} />

    </div>
  )
}
