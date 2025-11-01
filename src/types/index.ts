export interface TimeRecord {
  id: string;
  timestamp: string;
  date: string;
  time: string;
  day: number;
  month: number;
  year: number;
  weekOfYear: number;
}

export type SortOrder = 'desc' | 'asc';
export type FilterType = 'all' | 'day' | 'week' | 'month' | 'year';

export interface FilterState {
  sortOrder: SortOrder;
  filterType: FilterType;
  filterValue: string;
}