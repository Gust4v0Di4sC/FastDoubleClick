import type { TimeRecord } from "../../types";

interface RecordItemProps {
  record: TimeRecord;
  onDelete: (id: string) => void;
}

export const RecordItem: React.FC<RecordItemProps> = ({ record, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all">
      <div>
        <p className="font-semibold text-gray-800">{record.date}</p>
        <p className="text-sm text-gray-600">{record.time}</p>
        <p className="text-xs text-gray-500">Semana {record.weekOfYear}</p>
      </div>
      <button
        onClick={() => onDelete(record.id)}
        className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all"
      >
        Excluir
      </button>
    </div>
  );
};