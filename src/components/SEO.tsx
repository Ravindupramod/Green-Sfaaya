import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

const SEO = ({
  title = 'Green Safaaya | Luxury Boutique Hotel in Anuradhapura',
  description = 'Experience refined elegance at Green Safaaya, a luxury boutique hotel near UNESCO World Heritage sites in Anuradhapura, Sri Lanka.',
  keywords = 'Anuradhapura hotel, luxury hotel Sri Lanka, luxury accommodation, heritage hotel',
  image = 'https://greensafaaya.com/og-image.jpg',
  url = 'https://greensafaaya.com',
  type = 'website',
  structuredData,
}: SEOProps) => {
  const fullTitle = title.includes('Green Safaaya') ? title : `${title} | Green Safaaya`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
