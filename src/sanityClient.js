import sanityClient from '@sanity/client';

// projectId and dataset come from https://www.sanity.io/manage
export default sanityClient({
  projectId: 'wy648n8k',
  dataset: 'production',
  useCdn: true, // `false` if you want to ensure fresh data
});
