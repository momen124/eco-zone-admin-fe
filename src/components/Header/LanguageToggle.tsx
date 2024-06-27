import { Tabs } from '@mantine/core';

import useLanguage from '@/hooks/useLanguage';

export default function LanguageToggle() {
  const { changeLanguage: changeLang, language } = useLanguage();

  const options = [
    { value: 'ar', label: 'عـ' },
    { value: 'en', label: 'EN' },
  ];

  const changeLanguage = (value: 'ar' | 'en') => {
    changeLang(value);
  };

  return (
    <Tabs
      value={language}
      onChange={value => {
        if (value) changeLanguage(value as 'ar' | 'en');
      }}
      variant='pills'
      color={'dark'}
    >
      <Tabs.List grow className='grid h-full w-full flex-1 grid-cols-2'>
        {options.map(({ value, label }) => (
          <Tabs.Tab
            className='flex-1 text-xs font-semibold'
            key={value}
            value={value}
          >
            {label}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>
  );
}
