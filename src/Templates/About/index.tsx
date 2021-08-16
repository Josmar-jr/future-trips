import { CloseOutline } from '@styled-icons/evaicons-outline';

import { LinkWrapper } from 'components/LinkWrapper';

import * as S from './styles';

export type AboutTemplateProps = {
  heading: string;
  body: string;
};

export function AboutTemplate({ heading, body }: AboutTemplateProps) {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>
      <S.Heading>{heading}</S.Heading>

      <S.Body>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </S.Body>
    </S.Content>
  );
}
