// netlify/functions/getInstructors.ts

import { type Handler } from '@netlify/functions';
import fetch from 'node-fetch';
import { joinURL, withoutTrailingSlash } from 'ufo';

const HAPIO_API_KEY = process.env.NUXT_HAPIO_API_KEY as string;
const HAPIO_API_URL = process.env.NUXT_HAPIO_API_URL as string;

const headers: Record<string, string> = {
  'User-Agent': 'YourAppName',
  'Accept': 'application/json',
  'Authorization': `Bearer ${HAPIO_API_KEY}`,
};

const handler: Handler = async (event, context) => {
  const url = joinURL(withoutTrailingSlash(HAPIO_API_URL), 'v1', 'resources');

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch resources: ${response.statusText}`);
    }

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

export { handler }