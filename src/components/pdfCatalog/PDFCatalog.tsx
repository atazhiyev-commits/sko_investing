"use client"
import PDFViewer from '@/components/PDF/PDFViewer';
import useWindowDimensions from 'react-window-dimensions-hook';

export default function PDFCatalog({ src, widthProps}: { src: string, widthProps: number }) {
    const { width } = useWindowDimensions();
    return <PDFViewer src={src} width={width - widthProps} />
}