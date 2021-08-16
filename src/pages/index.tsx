import { MapProps } from 'components/Map';
import { client } from 'graphql/client';
import { GetAllPlacesQuery } from 'graphql/generate/graphql';
import { GET_ALLPLACES } from 'graphql/queries';
import { GetStaticProps } from 'next';
import { HomeTemplate } from 'Templates/Home';

export default function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { places } = await client.request<GetAllPlacesQuery>(GET_ALLPLACES);

  return {
    props: {
      places
    }
  };
};
