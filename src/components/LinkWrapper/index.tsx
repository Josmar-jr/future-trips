import Link from 'next/link';
import { ReactNode } from 'react';

import * as S from './styles';

type LinkWrapperProps = {
  href: string;
  children: ReactNode;
};

export function LinkWrapper({ href, children }: LinkWrapperProps) {
  return (
    <S.Wrapper>
      <Link href={href}>{children}</Link>
    </S.Wrapper>
  );
}
