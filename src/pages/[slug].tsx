import { client } from 'graphql/client';
import { GetPageQuery, GetPagesQuery } from 'graphql/generate/graphql';
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import { AboutTemplate } from 'Templates/About';

export default function About({ heading, body }) {
  const router = useRouter();

  if (router.isFallback) return null;

  return <AboutTemplate heading={heading} body={body}/>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { pages } = await client.request<GetPageQuery>(GET_PAGES, { first: 3 });

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPagesQuery>(GET_PAGE_BY_SLUG, {
    slug: params.slug
  });

  if (!page) return { notFound: true };

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  };
};
