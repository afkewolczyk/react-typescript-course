export async function get(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data. ");
  }
  const data = (await response.json()) as unknown;
  return data;
}

// Alternative: Generic 'get' function

export async function getGeneric<T>(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data.");
  }

  const data = (await response.json()) as unknown;
  return data as T;
}

// To Use:
// const data = await get<RawDataBlogPost[]>(
//   "https://jsonplaceholder.typicode.com/posts"
// );
