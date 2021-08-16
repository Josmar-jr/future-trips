import { NextSeo } from 'next-seo';

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
        description={place?.description?.text }
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
              alt: `${place?.name}`
            }
          ]
        }}
      />
      <div>{place?.name}</div>
      <div dangerouslySetInnerHTML={{ __html: place?.description?.html }} />
      {place?.gallery?.map((image, index) => (
        <img key={`photo--${index}`} src={image.url} alt={place?.name} />
      ))}
    </>
  );
}
