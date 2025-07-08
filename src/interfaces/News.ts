export interface News {
  id: number;
  title: string;
  author: string;
  date: string; 
}

export interface PaginatedResponse<T> {
  currentPage: number;
  pageSize: number;
  totalPages: number;
  totalItems: number;
  data: T[];
}