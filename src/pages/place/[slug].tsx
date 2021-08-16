import { client } from 'graphql/client';
import {
  GetAllPlacesQuery,
  GetPlaceBySlugQuery
} from 'graphql/generate/graphql';
import { GET_ALLPLACES, GET_PLACE_BY_SLUG } from 'graphql/queries';
import { GetStaticPaths, GetStaticProps } from 'next';
import { PlacesTemplate } from 'Templates/Places';

export default function Places({ place }) {
  return <PlacesTemplate place={place} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { places } = await client.request<GetAllPlacesQuery>(GET_ALLPLACES, {
    first: 3
  });

  const paths = places.map(({ slug }) => ({
    params: { slug }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<GetPlaceBySlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  );

  if (!place) return { notFound: true };

  return {
    props: { place },
    revalidate: 60 * 60 * 6 // 6 hours
  };
};
