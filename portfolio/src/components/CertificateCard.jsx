import React, { useEffect, useRef, useState } from "react";
import {
  FaCertificate,
  FaSearchPlus,
  FaExternalLinkAlt,
  FaDownload,
} from "react-icons/fa";

function CertificateCard({ certificate, url, onPreview }) {
  const cardRef = useRef(null);
  const [inView, setInView] = useState(false);

  // Defer PDF embedding until the card is near the viewport to keep load fast.
  useEffect(() => {
    const node = cardRef.current;
    if (!node || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { rootMargin: "200px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [inView]);

  return (
    <article className="certificate-card" ref={cardRef}>
      <button
        type="button"
        className="certificate-preview"
        onClick={() => onPreview(certificate)}
        aria-label={`Preview ${certificate.title} certificate`}
      >
        {inView ? (
          <object
            data={`${url}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
            type="application/pdf"
            className="certificate-preview-doc"
            aria-hidden="true"
          >
            <div className="certificate-preview-fallback">
              <FaCertificate />
            </div>
          </object>
        ) : (
          <div className="certificate-preview-fallback">
            <FaCertificate />
          </div>
        )}
        <span className="certificate-preview-overlay">
          <FaSearchPlus /> Preview
        </span>
      </button>

      <h3>{certificate.title}</h3>
      <p className="certificate-topic">{certificate.topic}</p>

      <div className="certificate-actions">
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn">
          View <FaExternalLinkAlt className="icon" />
        </a>
        <a href={url} download={certificate.file} className="btn github-btn">
          Download <FaDownload className="icon" />
        </a>
      </div>
    </article>
  );
}

export default CertificateCard;
