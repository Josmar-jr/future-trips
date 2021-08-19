import { CloseOutline } from '@styled-icons/evaicons-outline';
import { Github } from 'components/Icons/Github';
import { Linkedin } from 'components/Icons/Linkedin';

import { LinkWrapper } from 'components/LinkWrapper';
import {
  motion,
  useAnimation,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
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
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'string',
          duration: 1,
          bounce: 0.3,
        },
      });
    }

    if (!inView) {
      animation.start({ x: '-100vw' });
    }
  }, [inView, animation]);

  return (
    <>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>
      <S.Content
        as={motion.section}
        variants={containerAnimate}
        initial="hidden"
        animate="show"
      >
        <S.Heading as={motion.h1} variants={itemAnimate}>
          {heading}
        </S.Heading>

        <h3>Projeto em desenvolvimento!</h3>

        <S.Body as={motion.p} variants={itemAnimate}>
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </S.Body>

        <S.Flex>
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
          <S.AboutDeveloper>
            <p>
              Olá meu nome é Josmar Junior, sou desenvolvedor Front-End, focado
              em entregar a melhor experiência para o usuário.
            </p>
            <span>
              <a href="">
                <Github />
              </a>
              <a href="">
                <Linkedin />
              </a>
            </span>
          </S.AboutDeveloper>
        </S.Flex>
      </S.Content>
    </>
  );
}
