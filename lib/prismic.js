import Prismic from 'prismic-javascript';

export const getApi = options => Prismic.getApi('https://sean-prismic-demo.prismic.io/api/v2', options);

export const linkResolver = doc => `/prismic-demo/${doc.uid}`;

export { Prismic };
