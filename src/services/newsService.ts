import api from './api';
import { News, PaginatedResponse } from '../interfaces/News';

interface GetNewsParams {
  page: number;
  pageSize: number;
  query?: string;
}

export const getNews = async (
  params: GetNewsParams
): Promise<PaginatedResponse<News>> => {
  const response = await api.get<PaginatedResponse<News>>('/api/news', {
    params,
  });
  return response.data;
};
