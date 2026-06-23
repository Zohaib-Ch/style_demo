import { Metadata } from 'next';

interface MetadataProps {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title = 'Style | Premium Textile, Fabric, and Apparel Manufacturers',
  description = 'Experience award-winning, premium textile, apparel and ICT manufacturing. Built for quality, driven by innovation, and committed to sustainability.',
  image = '/og-image.jpg',
  noIndex = false,
}: MetadataProps = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@style',
    },
    metadataBase: new URL('https://style-website.vercel.app'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
