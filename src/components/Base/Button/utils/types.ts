import type { Namespace, TranslationKey } from '@/types/i18n/withTranslation';
import type { ButtonProps as BaseMantineButtonProps } from '@mantine/core';
import type { ReactNode } from 'react';
import type { Variants } from './variants';

type BaseButtonProps = Omit<BaseMantineButtonProps, 'variant'> &
  React.ComponentPropsWithoutRef<'button'> & {
    variant?: Variants;
    icon?: ReactNode;
    renderRoot?: (props: unknown) => JSX.Element;
  };

type TranslatedButtonProps<NS extends Namespace> = {
  namespace: NS;
  text: TranslationKey<NS>;
} & BaseButtonProps;

type UntranslatedButtonProps = {
  translate: false;
} & BaseButtonProps;

export type ButtonProps<NS extends Namespace> =
  | TranslatedButtonProps<NS>
  | UntranslatedButtonProps;

export function isTranslatedButtonProps<NS extends Namespace>(
  props: ButtonProps<NS>,
): props is TranslatedButtonProps<NS> {
  return 'namespace' in props;
}
