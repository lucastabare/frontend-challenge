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
  const response = await api.get('/api/news', { params });
  return response.data;
};

export const getNewsById = async (id: number): Promise<News> => {
  const response = await api.get<News>(`/api/news/${id}`);
  return response.data;
};

export const createNews = async (news: News): Promise<News> => {
  const response = await api.post<News>('/api/news', news);
  return response.data;
};

export const updateNews = async (id: string, news: News): Promise<News> => {
  const response = await api.put<News>(`/api/news/${id}`, news);
  return response.data;
};

export const deleteNews = async (id: number): Promise<void> => {
  await api.delete(`/api/news/${id}`);
};
