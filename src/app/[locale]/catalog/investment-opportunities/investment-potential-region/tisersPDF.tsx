"use client"
import { useSearchParams } from "next/navigation";
import PDFViewer from "@/components/PDF/PDFViewer";

export const TisersPDF = () => {
    const searchQuery = useSearchParams()?.get("tisers");
    return <PDFViewer src={"/pdf/tisers/" + searchQuery + ".pdf"} />
};