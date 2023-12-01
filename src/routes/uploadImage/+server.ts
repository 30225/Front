import { RequestHandler } from '@sveltejs/kit';
import { readFileSync, writeFileSync } from 'fs';

export const POST: RequestHandler = async ({ request }) => {
  // Get the file data from the request
  const formData = await request.formData();
  const image = formData.get('image');

  // Check if the file exists
  if (!image) {
    return {
      body: { error: 'No file uploaded' },
      status: 400,
    };
  }

  // Generate a unique filename
  const filename = `${image.name}`;

  // Save the file to disk
  try {
    const fileBuffer = await image.arrayBuffer();
    writeFileSync(`static/images/${filename}`, new Buffer(fileBuffer));
  } catch (error) {
    console.error(error);
    return {
      body: { error: 'Failed to save file' },
      status: 500,
    };
  }

  // Return the filename
  const response = {
    body: { filename: `/images/${filename}` }, // Replace with actual filename
    status: 200, // Replace with appropriate status code
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return new Response(JSON.stringify(response.body), response);
};