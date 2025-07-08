export interface News {
  id?: number;
  title: string;
  body: string;
  imageUrl?: string;
  author?: string;
  date: Date
}

export interface PaginatedResponse<T> {
  currentPage: number;
  pageSize: number;
  totalPages: number;
  totalItems: number;
  data: T[];
}
