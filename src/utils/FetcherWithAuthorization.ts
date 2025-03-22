import axios, { AxiosRequestConfig } from 'axios';

const FetcherWithAuthorization = async (url: string, configs?: AxiosRequestConfig) => {
  const token = import.meta.env.VITE_API_TOKEN;

  const config: AxiosRequestConfig = {
    ...configs,
    headers: { Authorization: `Bearer ${token}` },
  };

  const response = await axios.get(url, config);

  return response.data;
};

export default FetcherWithAuthorization;
