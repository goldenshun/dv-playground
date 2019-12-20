/* eslint-disable react/no-array-index-key */
import { RichText } from 'prismic-reactjs';
import prismicClient from '../lib/prismicClient';
import PercentCircleOutlined from '../components/PercentCircleOutlined';

const PrismicDemo = ({ section }) => (
  <div style={{ display: 'flex', maxWidth: '1280px', margin: 'auto' }}>
    <Body body={section.data.body} />
    <Visualization data={section.data.data_visualizations} />
  </div>
);

const Body = ({ body }) => (
  <div>
    <RichText render={body} />
  </div>
);

const Visualization = ({ data }) => (
  <div style={{ display: 'flex' }}>
    {data.map((item, index) => (
      <div key={index} style={{ margin: '16px' }}>
        <RichText render={item.title} />
        <PercentCircleOutlined percentage={item.value} />
      </div>
    ))}
  </div>
);

PrismicDemo.getInitialProps = async () => {
  const section = await prismicClient.getByUID('section', 'test-section');
  return { section };
};

export default PrismicDemo;
