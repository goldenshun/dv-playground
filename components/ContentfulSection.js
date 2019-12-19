/* eslint-disable react/no-array-index-key */
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import PercentCircleOutlined from './PercentCircleOutlined';

const ContentfulSection = ({ entry }) => {
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

export default ContentfulSection;
