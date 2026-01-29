"use client";
import { useState, type FC } from "react";
import clsx from "clsx";
import type { FAQlist } from "@/types/translateTypes";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import { ChevronDown } from "lucide-react";

import "./accordFAQ.scss";

interface FAQProps extends FAQlist {
  className?: string;
}

const AccordionFAQ: FC<FAQProps> = ({ question, answer, className }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Accordion
      style={{ border: "none", boxShadow: "none" }}
      className={clsx("accordion", className)}
      expanded={expanded === question}
      onChange={handleChange(question)}
    >
      <AccordionSummary
        className="accordionSummary"
        sx={{
          minHeight: 0,
          padding: 0,
          '& .MuiAccordionSummary-content': {
            marginBlock: 1.5,
          },
          '&.Mui-expanded': {
            minHeight: 0,
          },
          '&.Mui-expanded .MuiAccordionSummary-content': {
            marginBottom: 0.5,
          },
        }}
        expandIcon={<ChevronDown />}
      >
        <Typography className="question">{question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className="answer">
          <strong>{answer}</strong>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionFAQ;
