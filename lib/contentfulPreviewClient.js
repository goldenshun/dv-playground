import { createClient } from 'contentful';
import getConfig from 'next/config';

const client = createClient({
  space: getConfig().publicRuntimeConfig.CONTENTFUL_SPACE_ID || 'DEFAULT',
  accessToken: getConfig().publicRuntimeConfig.CONTENTFUL_PREVIEW_ACCESS_TOKEN || 'DEFAULT',
  host: 'preview.contentful.com',
});

export default client;
