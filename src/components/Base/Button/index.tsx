import type { Namespace } from '@/types/i18n/withTranslation';
import { cn } from '@/utils/cn';
// eslint-disable-next-line no-restricted-imports
import { Button as BaseButton } from '@mantine/core';
import { useTranslation } from 'next-i18next';
import { forwardRef, type ReactNode } from 'react';
import type { ButtonProps } from './utils/types';
import { isTranslatedButtonProps } from './utils/types';
import { buttonVariants } from './utils/variants';

const ButtonInner = <NS extends Namespace>(
  allProps: ButtonProps<NS>,
  ref: React.Ref<HTMLButtonElement>,
) => {
  const { variant =  "primary", icon, ...props } = allProps;
  let namespace: NS = 'common' as NS;

  if (isTranslatedButtonProps(allProps)) {
    namespace = allProps.namespace;
  }

  const { t } = useTranslation(namespace);

  const content: ReactNode = isTranslatedButtonProps(allProps)
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (t(allProps.text as any) as string)
    : props.children;

    console.log(variant)

  return (
    <BaseButton
      ref={ref}
      rightSection={icon}
      {...props}
      translate="no"
      classNames={{
        root: cn(
          'transition-colors duration-200 ease-in-out',
          buttonVariants[variant],
          props.className,
        ),
      }}
      renderRoot={props.disabled ? undefined : props.renderRoot}
    >
      {content}
    </BaseButton>
  );
};

const Button = forwardRef(ButtonInner) as unknown as <T extends Namespace>(
  props: ButtonProps<T> & { ref?: React.Ref<HTMLButtonElement> },
) => JSX.Element;

export default Button;
