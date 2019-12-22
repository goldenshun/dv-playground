import { getApi, linkResolver, Prismic } from '../../lib/prismic';

const prismicPreview = async (req, res) => {
  const prismicApi = await getApi({ req, res });
  const url = await prismicApi.previewSession(req.query.token, linkResolver, '/');

  // res.cookie(Prismic.previewCookie, req.query.token, { path: '/' });
  res.writeHead(302, {
    Location: url,
    // 'Set-Cookie': `${Prismic.previewCookie}=${req.query.token}`,
  });
  res.end();
};

export default prismicPreview;
