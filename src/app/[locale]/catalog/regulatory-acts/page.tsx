import { type FC } from "react";
import clsx from "clsx";
import { BtnLink } from "@/components/btnLink/BtnLink";

import "./page.scss";

interface Props {
  className?: string;
}

const InvestorGuide: FC<Props> = async ({ className }) => {
  return (
    <div className={clsx("laws", className)}>
      <h2 className="title-section">Законы</h2>
      <div className="listLaws">
        <h3 className="titleLaw">Инвестиции</h3>
        <BtnLink
          name="О некоторых вопросах
        государственной поддержки
        инвестиций
        "
          src="https://adilet.zan.kz/rus/docs/V1500012572"
        />
        <BtnLink
          name="Об утверждении Правил заключения, изменения и расторжения соглашений об инвестициях"
          src="https://adilet.zan.kz/rus/docs/V2300032095"
        />

        <BtnLink
          name="Об утверждении Правил определения проекта инвестиционным для предоставления земельных участков из государственной собственности"
          src="https://adilet.zan.kz/rus/docs/V2100026282"
        />

        <BtnLink
          name="Об утверждении Правил приема, регистрации и рассмотрения заявки на предоставление инвестиционных преференций"
          src="https://adilet.zan.kz/rus/docs/V1500012780"
        />
        <h3 className="titleLaw">Бизнес</h3>
        <BtnLink
          name="О некоторых мерах государственной поддержки частного предпринимательства"
          src="https://adilet.zan.kz/rus/docs/P2400000754"
        />

        <h3 className="titleLaw">Инновации</h3>
        <BtnLink
          name="Об утверждении Правил создания и функционирования малых индустриальных зон"
          src="https://adilet.zan.kz/rus/docs/V1900019355"
        />

        <BtnLink
          name="Об утверждении Правил включения промышленно-инновационных проектов в единую карту индустриализации"
          src="https://adilet.zan.kz/rus/docs/V2300033321"
        />

        <BtnLink
          name="О специальных экономических и индустриальных зонах"
          src="https://adilet.zan.kz/rus/docs/Z1900000242"
        />
        <h3 className="titleLaw">Туризм</h3>
        <BtnLink
          name="Об утверждении Правил возмещения части затрат по приобретению автомобильных транспортных средств вместимостью более восьми мест для сидения для субъектов предпринимательства, осуществляющих туристскую деятельность"
          src="https://adilet.zan.kz/rus/docs/V2100026380"
        />

        <BtnLink
          name="Об утверждении Правил возмещения части затрат субъектов предпринимательства по строительству объектов придорожного сервиса"
          src="https://adilet.zan.kz/rus/docs/V2100026375"
        />

        <BtnLink
          name="Об утверждении Правил возмещения части затрат субъектов предпринимательства при строительстве и реконструкции объектов туристской деятельности"
          src="https://adilet.zan.kz/rus/docs/V2100026403"
        />

        <BtnLink
          name="Об утверждении Правил субсидирования части затрат субъектов предпринимательства на содержание санитарно-гигиенических узлов"
          src="https://adilet.zan.kz/rus/docs/V2100025801"
        />
      </div>
    </div>
  );
};

export default InvestorGuide;
