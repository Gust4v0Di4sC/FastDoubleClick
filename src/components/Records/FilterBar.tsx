import { ArrowUpDown } from 'lucide-react';
import type { FilterState, FilterType, SortOrder } from '../../types';
import { DateUtils } from '../../utils/dateManager';

interface FilterBarProps {
  filterState: FilterState;
  onSortChange: (order: SortOrder) => void;
  onFilterTypeChange: (type: FilterType) => void;
  onFilterValueChange: (value: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filterState,
  onSortChange,
  onFilterTypeChange,
  onFilterValueChange
}) => {
  const { sortOrder, filterType, filterValue } = filterState;

  return (
    <div className="mb-6 space-y-4">
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => onSortChange(sortOrder === 'desc' ? 'asc' : 'desc')}
          className="flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-all"
        >
          <ArrowUpDown size={18} />
          {sortOrder === 'desc' ? 'Mais recente' : 'Mais antigo'}
        </button>

        <select
          value={filterType}
          onChange={(e) => onFilterTypeChange(e.target.value as FilterType)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">Todos</option>
          <option value="day">Por Dia</option>
          <option value="week">Por Semana</option>
          <option value="month">Por Mês</option>
          <option value="year">Por Ano</option>
        </select>

        {filterType === 'day' && (
          <input
            type="date"
            value={filterValue}
            onChange={(e) => onFilterValueChange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}

        {filterType === 'week' && (
          <select
            value={filterValue}
            onChange={(e) => onFilterValueChange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Selecione a semana</option>
            {Array.from({ length: 53 }, (_, i) => i + 1).map(week => (
              <option key={week} value={week}>
                Semana {week}
              </option>
            ))}
          </select>
        )}

        {filterType === 'month' && (
          <select
            value={filterValue}
            onChange={(e) => onFilterValueChange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Selecione o mês</option>
            {DateUtils.getMonthNames().map((month, index) => {
              const currentYear = DateUtils.getCurrentYear();
              const monthValue = `${currentYear}-${String(index + 1).padStart(2, '0')}`;
              return (
                <option key={monthValue} value={monthValue}>
                  {month} {currentYear}
                </option>
              );
            })}
          </select>
        )}

        {filterType === 'year' && (
          <select
            value={filterValue}
            onChange={(e) => onFilterValueChange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Selecione o ano</option>
            {Array.from({ length: 11 }, (_, i) => 2020 + i).map(year => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        )}

        {filterType !== 'all' && filterValue && (
          <button
            onClick={() => onFilterValueChange('')}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all"
          >
            Limpar Filtro
          </button>
        )}
      </div>
    </div>
  );
};