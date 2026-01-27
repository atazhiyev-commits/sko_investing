'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import './LocaleSwticher.scss';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
      router.refresh();
    }
  };

  return (
    <select
      className={"language"}
      value={locale}
      onChange={e => switchLocale(e.target.value)}>
      <option value="en">EN</option>
      <option value="ru">RU</option>
      {/* <option value="kz">kz</option>
      <option value="chi">chi</option> */}
    </select>
  );
}