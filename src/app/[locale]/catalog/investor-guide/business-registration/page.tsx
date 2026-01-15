"use client";
import clsx from "clsx";
import { type FC } from "react";

import PDFViewer from "@/components/PDF/PDFViewer";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

interface Props {
  className?: string;
}

const BusinessRegistration: FC<Props> = ({ className }) => {
  return (
    <>
      <h2 className={clsx("BusinessRegistration", className)}>
        Регистрация и бизнес
      </h2>
      <PDFViewer src={"/example.pdf"} />
      {/* <Document file="/example.pdf">
        <Page
          pageNumber={1}
          width={800}
        />
      </Document> */}
    </>
  );
};

export default BusinessRegistration;
