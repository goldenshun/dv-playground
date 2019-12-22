import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { RichText } from 'prismic-reactjs';
import { getApi } from '../../lib/prismic';
import PercentCircleOutlined from '../../components/PercentCircleOutlined';

const PrismicDemo = () => {
  const [section, setSection] = useState(null);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const uid = router.query.uid || 'test-section';
      const prismicApi = await getApi();
      setSection(await prismicApi.getByUID('section', uid));
    })();
  }, []);

  if (!section) return null;
  return (
    <div style={{ display: 'flex', maxWidth: '1280px', margin: 'auto' }}>
      <Body body={section.data.body} />
      <Visualization data={section.data.data_visualizations} />
    </div>
  );
};

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

export default PrismicDemo;
