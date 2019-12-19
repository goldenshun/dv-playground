import ContentfulSection from '../../components/ContentfulSection';
import contentfulPreviewClient from '../../lib/contentfulPreviewClient';

const ContentfulPreview = ({ entry }) => (
  <ContentfulSection entry={entry} />
);

ContentfulPreview.getInitialProps = async (ctx) => {
  const { query } = ctx;

  if (!query.entryId) return {};

  const entry = await contentfulPreviewClient.getEntry(query.entryId);
  return { entry };
};

export default ContentfulPreview;
