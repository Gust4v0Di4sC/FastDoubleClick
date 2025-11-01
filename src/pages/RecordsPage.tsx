import React, { useState } from 'react';
import type { FilterState, FilterType, SortOrder, TimeRecord } from '../types';
import { FilterUtils } from '../utils/filter';
import { FilterBar } from '../components/Records/FilterBar';
import { RecordsList } from '../components/Records/RecordsList';

interface RecordsPageProps {
  records: TimeRecord[];
  onDelete: (id: string) => Promise<void>;
}

export const RecordsPage: React.FC<RecordsPageProps> = ({ records, onDelete }) => {
  const [filterState, setFilterState] = useState<FilterState>({
    sortOrder: 'desc',
    filterType: 'all',
    filterValue: ''
  });

  const filteredRecords = FilterUtils.filterRecords(records, filterState);

  const handleSortChange = (sortOrder: SortOrder) => {
    setFilterState(prev => ({ ...prev, sortOrder }));
  };

  const handleFilterTypeChange = (filterType: FilterType) => {
    setFilterState({ sortOrder: filterState.sortOrder, filterType, filterValue: '' });
  };

  const handleFilterValueChange = (filterValue: string) => {
    setFilterState(prev => ({ ...prev, filterValue }));
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Deseja realmente excluir este registro?')) {
      try {
        await onDelete(id);
      } catch (error) {
        alert(`Erro ao excluir registro ${error}`);
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Registros ({filteredRecords.length})
      </h2>

      <FilterBar
        filterState={filterState}
        onSortChange={handleSortChange}
        onFilterTypeChange={handleFilterTypeChange}
        onFilterValueChange={handleFilterValueChange}
      />

      <RecordsList records={filteredRecords} onDelete={handleDelete} />
    </div>
  );
};