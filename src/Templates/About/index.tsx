import { CloseOutline } from '@styled-icons/evaicons-outline';

import { LinkWrapper } from 'components/LinkWrapper';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { containerAnimate, itemAnimate } from 'styles/animations';

import * as S from './styles';

type TypeImages = {
  url: string;
  width: number;
  height: number;
};

export type AboutTemplateProps = {
  heading: string;
  body: string;
  profile?: TypeImages | undefined;
};

export function AboutTemplate({ heading, body, profile }: AboutTemplateProps) {
  return (
    <S.Content
      as={motion.section}
      variants={containerAnimate}
      initial="hidden"
      animate="show"
    >
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>
      <S.Heading as={motion.h1} variants={itemAnimate}>
        {heading}
      </S.Heading>

      {profile && (
        <S.Profile as={motion.div} variants={itemAnimate}>
          <Image
            src={profile.url}
            width={profile.width}
            height={profile.height}
            quality={100}
            alt="my profile"
          />
        </S.Profile>
      )}

      <S.Body as={motion.p} variants={itemAnimate}>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </S.Body>
    </S.Content>
  );
}
