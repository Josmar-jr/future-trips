import { Logo } from 'components/Icons';
import { Pin } from 'components/Icons/Pin';
import { NextSeo } from 'next-seo';
import { SlideGallery } from './slide';
import { motion } from 'framer-motion';
import * as S from './styles';
import { containerAnimate, itemAnimate } from 'styles/animations';
import { CloseOutline } from '@styled-icons/evaicons-outline';
import { LinkWrapper } from 'components/LinkWrapper';
import { Footer } from 'components/Footer';

type ImageProps = {
  url: string;
  width: number;
  height: number;
};

export type PlacesTemplateProps = {
  place: {
    slug: string;
    name?: string;
    description?: {
      html: string;
      text?: string;
    };
    gallery?: ImageProps[] | undefined;
  };
};

export function PlacesTemplate({ place }: PlacesTemplateProps) {
  return (
    <>
      <NextSeo
        title={`${place?.name} | My Future Trips`}
        description={place?.description?.text}
        canonical="https://future-trips-theta.vercel.app"
        openGraph={{
          url: 'https://future-trips-theta.vercel.app',
          title: `${place?.name} | My Future Trips`,
          description: place?.description?.text,
          images: [
            {
              url: place?.gallery[0]?.url,
              width: place?.gallery[0]?.width,
              height: place?.gallery[0]?.height,
              alt: `${place?.name}`,
            },
          ],
        }}
      />
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>
      <S.Container
        as={motion.main}
        variants={containerAnimate}
        initial="hidden"
        animate="show"
      >
        <S.TopBar as={motion.div} variants={itemAnimate}>
          <Logo width="107" height="81" />
        </S.TopBar>
        <S.Heading as={motion.h1} variants={itemAnimate}>
          <Pin width="40" height="50" /> {place?.name}
        </S.Heading>

        <S.Description
          as={motion.div}
          variants={itemAnimate}
          dangerouslySetInnerHTML={{ __html: place?.description?.html }}
        />

        <SlideGallery place={place} />
      </S.Container>
    </>
  );
}
