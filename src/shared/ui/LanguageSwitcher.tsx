'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { useTransition } from 'react';
import './LocaleSwticher.scss';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) return;

    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <>
      <select
        className={"language"}
        value={locale}
        disabled={isPending}
        id='language_state'
        onChange={e => switchLocale(e.target.value)}
        style={{ opacity: isPending ? 0.5 : 1 }}
      >
        <option id='lang' value="en">EN</option>
        <option id='lang' value="ru">RU</option>
        {/* 
        <option value="kz">KZ</option>
        <option value="chi">CHI</option> */}
      </select>
      {isPending && (
        <div className="loading-overlay">
          <div className="loader"></div>
        </div>
      )}
    </>
  );
}