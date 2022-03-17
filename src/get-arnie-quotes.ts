import { httpGet } from './mock-http-interface';

type TResult = { 'Arnie Quote': string } | { FAILURE: string };

const makeRequest = async (url: string): Promise<TResult> => {
  const { body, status } = await httpGet(url)
  const { message } = JSON.parse(body)

  return status === 200 ? { 'Arnie Quote': message } : { FAILURE: message };
}

export const getArnieQuotes = async (urls : string[]) : Promise<TResult[]> => {
  const results = await Promise.all(urls.map(makeRequest));

  return results;
};
