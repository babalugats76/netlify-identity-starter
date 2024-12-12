// @/server/util/hapioService.ts

import type { RuntimeConfig } from 'nuxt/schema';
import { joinURL, withoutTrailingSlash } from 'ufo';

const { HAPIO_API_KEY, HAPIO_API_URL } = useRuntimeConfig() as RuntimeConfig;

const headers: Record<string, string> = {
  'User-Agent': 'YourAppName',
  'Accept': 'application/json',
  'Authorization': `Bearer ${HAPIO_API_KEY}`,
};

export const getInstructors = async () => {
  const url = joinURL(withoutTrailingSlash(HAPIO_API_URL), 'v1', 'resources');

  try {
    const response = await $fetch(url, {
      method: 'GET',
      headers,
    });

    return response;
  } catch (error: any) {
    throw new Error(`Failed to fetch resources: ${error.message}`);
  }
}
