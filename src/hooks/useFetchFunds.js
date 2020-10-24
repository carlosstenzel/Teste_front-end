import useSWR from 'swr';

export default function useFetchFunds() {
  const url =
    'https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full';
  const { data, error } = useSWR(url, async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  });

  return { data, error };
}
