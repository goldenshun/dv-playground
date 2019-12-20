import BlockContent from '@sanity/block-content-to-react';
import sanityClient from '../lib/sanityClient';

const SanityDemo = (props) => {
  const { movie } = props;

  return (
    <div>
      <h1>{movie.title}</h1>
      <BlockContent blocks={movie.overview} {...sanityClient.config()} />
    </div>
  );
};

SanityDemo.getInitialProps = async () => {
  const slug = 'walle';
  const movie = await sanityClient.fetch(`
    *[_type == "movie" && slug.current == $slug][0]
  `, { slug });

  return { movie };
};

export default SanityDemo;
