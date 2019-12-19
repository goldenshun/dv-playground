/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import getConfig from 'next/config';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import PercentCircleOutlined from '../components/PercentCircleOutlined';

const client = createClient({
  space: getConfig().publicRuntimeConfig.CONTENTFUL_SPACE_ID,
  accessToken: getConfig().publicRuntimeConfig.CONTENTFUL_ACCESS_TOKEN,
});

const ContentfulDemo = () => {
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    (async () => {
      const fetchedEntry = await client.getEntry('4V37urPGkBWRaZsN9gOMO9');
      setEntry(fetchedEntry);
    })();
  }, []);

  if (!entry) return null;
  return (
    <div style={{ display: 'flex', maxWidth: '1280px', margin: 'auto' }}>
      <Body body={entry.fields.body} />
      <Visualization data={entry.fields.data} />
    </div>
  );
};

const Body = ({ body }) => (
  <div>
    {documentToReactComponents(body)}
  </div>
);

const Visualization = ({ data }) => (
  <div style={{ display: 'flex' }}>
    {data.map((item, index) => (
      <div key={index} style={{ margin: '16px' }}>
        <h3>{item.title}</h3>
        <PercentCircleOutlined percentage={item.value} />
      </div>
    ))}
  </div>
);

export default ContentfulDemo;
