import type { FilterState, TimeRecord } from "../types";

export class FilterUtils {
  static filterRecords(
    records: TimeRecord[],
    filterState: FilterState
  ): TimeRecord[] {
    let filtered = [...records];
    const { filterType, filterValue, sortOrder } = filterState;

    if (filterType !== 'all' && filterValue) {
      const now = new Date();
      
      switch (filterType) {
        case 'day':
          { const [year, month, day] = filterValue.split('-').map(Number);
          filtered = filtered.filter(r => 
            r.day === day && r.month === month && r.year === year
          );
          break; }
        case 'week':
          { const weekNum = parseInt(filterValue);
          filtered = filtered.filter(r => 
            r.weekOfYear === weekNum && r.year === now.getFullYear()
          );
          break; }
        case 'month':
          { const [yM, mM] = filterValue.split('-').map(Number);
          filtered = filtered.filter(r => r.month === mM && r.year === yM);
          break; }
        case 'year':
          { const yearNum = parseInt(filterValue);
          filtered = filtered.filter(r => r.year === yearNum);
          break; }
      }
    }

    filtered.sort((a, b) => {
      const timeA = new Date(a.timestamp).getTime();
      const timeB = new Date(b.timestamp).getTime();
      return sortOrder === 'desc' ? timeB - timeA : timeA - timeB;
    });

    return filtered;
  }
}