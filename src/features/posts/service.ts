import baseApi from 'src/http';

import { PostScheme } from './Post';

export async function fetchPosts(): Promise<PostScheme[]> {
  const resp = await baseApi.get<PostScheme[]>({ path: 'posts' });

  return resp;
}
