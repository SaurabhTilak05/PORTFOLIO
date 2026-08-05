import React, { useEffect } from "react";
import { FaTimes, FaExternalLinkAlt, FaDownload } from "react-icons/fa";

function CertificateModal({ certificate, url, onClose }) {
  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="certificate-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${certificate.title} certificate`}
    >
      <div
        className="certificate-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="certificate-modal-head">
          <h3>{certificate.title}</h3>
          <button
            type="button"
            className="certificate-modal-close"
            onClick={onClose}
            aria-label="Close certificate preview"
          >
            <FaTimes />
          </button>
        </header>

        <iframe
          src={`${url}#view=FitH`}
          title={certificate.title}
          className="certificate-modal-doc"
        />

        <footer className="certificate-modal-actions">
          <a href={url} target="_blank" rel="noopener noreferrer" className="btn">
            Open in new tab <FaExternalLinkAlt className="icon" />
          </a>
          <a href={url} download={certificate.file} className="btn github-btn">
            Download <FaDownload className="icon" />
          </a>
        </footer>
      </div>
    </div>
  );
}

export default CertificateModal;
