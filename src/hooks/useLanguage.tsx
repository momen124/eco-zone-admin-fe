import { useDirection } from '@mantine/core';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

export type SupportedLanguages = 'ar' | 'en';

type UseLanguage = () => {
  language: SupportedLanguages;
  changeLanguage: (language: SupportedLanguages) => void;
};

const useLanguage: UseLanguage = () => {
  const {
    pathname,
    asPath,
    query,
    replace: routerReplace,
    locale: currentLocale,
  } = useRouter();
  const { toggleDirection } = useDirection();
  const changeLanguage = useCallback(
    (locale: SupportedLanguages) => {
      setCookie('NEXT_LOCALE', locale);
      if (currentLocale === locale) return;
      routerReplace({ pathname, query }, asPath, { locale });
      toggleDirection();
    },
    [currentLocale, routerReplace, pathname, query, asPath, toggleDirection],
  );

  return {
    language: (currentLocale as SupportedLanguages) || 'ar',
    changeLanguage,
  };
};

export default useLanguage;