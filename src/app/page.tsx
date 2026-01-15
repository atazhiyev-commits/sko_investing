import Image from "next/image";
import styles from "./page.module.css";
import AccordionFAQ from "@/components/Accordion/AccordionFAQ";
import Header from "@/layouts/header";
import Footer from "@/layouts/footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <h1>Hi sko_invest</h1>
        <AccordionFAQ question="first" answer="answer"/>
        <AccordionFAQ question="second" answer="answer"/>
        <AccordionFAQ question="three" answer="answer"/>
      </main>
      <Footer />
    </div>
  );
}
