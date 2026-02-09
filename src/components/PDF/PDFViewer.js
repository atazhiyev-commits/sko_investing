"use client";
import dynamic from "next/dynamic";

const PDFViewerClient = dynamic(() => import("./PDFViewerClient"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        padding: "2rem",
        textAlign: "center",
        fontSize: "1.2rem",
        color: "#333",
      }}
    >
      Loading PDF Viewer...
    </div>
  ),
});

const PDFViewer = ({ src, width }) => {
  return <PDFViewerClient src={src} width={width > 1000 ? 850 : width} />;
};
export default PDFViewer;
