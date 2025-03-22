import axios, { AxiosRequestConfig } from 'axios';

const FetcherWithAuthorization = (url: string, configs?: AxiosRequestConfig) => async () => {
  const token = import.meta.env.VITE_API_TOKEN;

  const config: AxiosRequestConfig = {
    ...configs,
    headers: { Authorization: `Bearer ${token}` },
  };

  const response = await axios.get(url, config);

  return response.data;
};

export default FetcherWithAuthorization;
