import { type FC, useCallback } from "react";
import { Link } from "@/i18n/navigation";
import useEmblaCarousel from "embla-carousel-react";
import clsx from "clsx";
import type { NewsItem } from "@/types/api_news_types";

import BigImg from "@/components/newsCard/big/BigImg";

import { ChevronLeft, ChevronRight, CircleChevronLeft, CircleChevronRight } from "lucide-react";

import "./carouselLaws.scss";
import { BtnLink } from "../btnLink/BtnLink";
import { LawType } from "@/types/translateTypes";

interface Props {
    lawsList: any;
    className?: string;
}

const CarouselLaws: FC<Props> = ({ lawsList, className }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
    const sizeIcon = 48;

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className={clsx("carouselLaws", className)} ref={emblaRef}>
            <div className="embla__container">
                {lawsList.map((lawCategory: LawType, index: number) => (
                    <div className="embla__slide"  key={index}>
                        <div className="block_laws">
                            <h3 className="title_law">{lawCategory.title}</h3>
                            {lawCategory.laws.map((law, index: number) => (
                                <BtnLink
                                    key={index}
                                    src={law.src}
                                    name={law.name}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="embla__buttons">
                <button className="embla__prev" onClick={scrollPrev}>
                    <CircleChevronLeft size={sizeIcon} className="iconBtn" />
                </button>
                <button className="embla__next" onClick={scrollNext}>
                    <CircleChevronRight size={sizeIcon} className="iconBtn" />
                </button>
            </div>

        </div>
    );
};

export default CarouselLaws;
