"use client";
import { type FC } from "react";
import clsx from "clsx";

import PDFViewer from "@/components/PDF/PDFViewer";

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
