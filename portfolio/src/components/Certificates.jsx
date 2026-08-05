import React, { useState } from "react";
import "./Certificates.css";
import CertificateCard from "./CertificateCard";
import CertificateModal from "./CertificateModal";

function Certificates() {
  const base = import.meta.env.BASE_URL;
  const [activeCert, setActiveCert] = useState(null);

  const certificates = [
    {
      title: "Java Certificate",
      topic: "Java programming fundamentals",
      file: "Java Certificate.pdf",
    },
    {
      title: "Java Spring Boot",
      topic: "Spring Boot backend development",
      file: "Java Spring Boot.pdf",
    },
    {
      title: "Programming in Core Java",
      topic: "Core Java & OOP",
      file: "Programming in Core Java.pdf",
    },
    {
      title: "SQL Developer",
      topic: "SQL & database development",
      file: "SQL Developer.pdf",
    },
    {
      title: "Learn JavaScript",
      topic: "JavaScript fundamentals",
      file: "Learn JavaScript.pdf",
    },
    {
      title: "Node.js",
      topic: "Node.js backend development",
      file: "Node JS.pdf",
    },
    {
      title: "GitHub Tutorial",
      topic: "Git & GitHub version control",
      file: "GitHub Tutorial Beginner's Training Guide.pdf",
    },
    {
      title: "AI Agents",
      topic: "AI agents & automation",
      file: "AI Agents.pdf",
    },
    {
      title: "Generative AI for Project Managers",
      topic: "Generative AI in project management",
      file: "Generative AI for Project Managers.pdf",
    },
    {
      title: "Google Cloud Generative AI Leader",
      topic: "Google Cloud Generative AI",
      file: "Google Cloud Generative AI Leader.pdf",
    },
    {
      title: "Multi-Cloud Data Protection",
      topic: "Multi-cloud data protection & replication",
      file: "Multi-Cloud Data Protection and Replication.pdf",
    },
  ];

  const pdfUrl = (file) => `${base}certificates/${encodeURIComponent(file)}`;

  return (
    <section id="certificates" className="certificates">
      <div className="container fade-in-up">
        <h2 className="certificates-title">Certificates</h2>
        <p className="certificates-intro">
          Professional certifications and training credentials that support my
          Java backend and full-stack development journey. Scroll through the
          cards and click any one to preview the certificate.
        </p>

        <div className="certificates-scroll">
          {certificates.map((cert) => (
            <CertificateCard
              key={cert.file}
              certificate={cert}
              url={pdfUrl(cert.file)}
              onPreview={setActiveCert}
            />
          ))}
        </div>
      </div>

      {activeCert && (
        <CertificateModal
          certificate={activeCert}
          url={pdfUrl(activeCert.file)}
          onClose={() => setActiveCert(null)}
        />
      )}
    </section>
  );
}

export default Certificates;
