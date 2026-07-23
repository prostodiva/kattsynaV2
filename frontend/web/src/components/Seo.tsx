interface SeoProps {
  title: string;
  description: string;
  /** Route path beginning with "/", e.g. "/experience". */
  path: string;
}

const SITE_URL = 'https://kattsyna.com';

/**
 * Per-route document metadata. React 19 hoists <title>/<meta>/<link> rendered
 * anywhere in the tree into <head> and dedupes <title>, so no helmet library is
 * needed. Render <Seo /> once near the top of each page component.
 */
function Seo({ title, description, path }: SeoProps) {
  const url = `${SITE_URL}${path}`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <link rel="canonical" href={url} />
    </>
  );
}

export default Seo;
