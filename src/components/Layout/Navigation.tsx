import { Clock, List } from 'lucide-react';

interface NavigationProps {
  currentPage: 'register' | 'records';
  recordsCount: number;
  onNavigate: (page: 'register' | 'records') => void;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  currentPage, 
  recordsCount, 
  onNavigate 
}) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-4 mb-6">
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => onNavigate('register')}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
            currentPage === 'register'
              ? 'bg-blue-800 text-white shadow-md'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          <Clock size={20} />
          Registrar
        </button>
        <button
          onClick={() => onNavigate('records')}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
            currentPage === 'records'
              ? 'bg-blue-800 text-white shadow-md'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          <List size={20} />
          Registros ({recordsCount})
        </button>
      </div>
    </div>
  );
};