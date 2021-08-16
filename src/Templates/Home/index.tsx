import React from 'react';
import dynamic from 'next/dynamic';

import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';

import { LinkWrapper } from 'components/LinkWrapper';
import { MapProps } from 'components/Map';
import { NextSeo } from 'next-seo';

const Map = dynamic(() => import('components/Map'), { ssr: false });

export function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Future Trips"
        description="A simple project to show in a map the places that I went and show more informations and photos when clicked."
        canonical="https://future-trips-theta.vercel.app"
        openGraph={{
          url: 'https://future-trips-theta.vercel.app',
          title: 'My Future Trips',
          description:
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            {
              url: '',
              alt: ''
            }
          ],
          site_name: 'My Future Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  );
}
