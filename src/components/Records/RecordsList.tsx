import { Filter } from 'lucide-react';
import type { TimeRecord } from '../../types';
import { RecordItem } from './RecordItem';

interface RecordsListProps {
  records: TimeRecord[];
  onDelete: (id: string) => void;
}

export const RecordsList: React.FC<RecordsListProps> = ({ records, onDelete }) => {
  if (records.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <Filter size={48} className="mx-auto mb-4 opacity-50" />
        <p>Nenhum registro encontrado</p>
      </div>
    );
  }

  return (
    <div className="space-y-3 max-h-96 overflow-y-auto">
      {records.map((record) => (
        <RecordItem key={record.id} record={record} onDelete={onDelete} />
      ))}
    </div>
  );
};