export type FetcherError = Error & { response: Response; statusCode: number };

export default async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  if (res.ok) {
    return res.json();
  }
  const error = new Error(res.statusText) as FetcherError;
  error.statusCode = res.status;
  error.response = res;
  if (res.json) {
    const data = (await res.json()) as any;
    error.message = data?.message || data?.data?.message;
  }

  return Promise.reject(error);
}
