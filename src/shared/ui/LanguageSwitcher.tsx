'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { useTransition } from 'react'; // 1. Импортируем useTransition
import './LocaleSwticher.scss';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition(); // 2. Хук для плавных переходов

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) return;

    // 3. Оборачиваем навигацию в startTransition
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
    
    // router.refresh(); <--- УДАЛИТЬ ЭТО!
  };

  return (
    <select
      className={"language"}
      value={locale}
      disabled={isPending} // 4. Блокируем селект, пока идет переход
      onChange={e => switchLocale(e.target.value)}
      style={{ opacity: isPending ? 0.5 : 1 }} // Визуальный эффект загрузки
    >
      <option value="en">EN</option>
      <option value="ru">RU</option>
      {/* <option value="kz">KZ</option>
      <option value="chi">CHI</option> */}
    </select>
  );
}