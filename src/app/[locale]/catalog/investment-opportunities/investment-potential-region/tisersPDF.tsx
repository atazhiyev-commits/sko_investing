"use client"
import { useSearchParams } from "next/navigation";
import PDFCatalog from "@/components/pdfCatalog/PDFCatalog";

export const TisersPDF = () => {
    const adaptiveWidth = 80;

    const searchQuery = useSearchParams()?.get("tisers");
    return <div><PDFCatalog src={"/pdf/tisers/" + searchQuery + ".pdf"} widthProps={adaptiveWidth} /></div>
};  