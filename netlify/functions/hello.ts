import type { Handler } from "@netlify/functions";

const handler: Handler = async (_event: any, _context: any) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello, World!' }),
  };
};

export { handler };
