import { Clock } from 'lucide-react';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex items-center justify-center gap-3">
        <Clock size={32} className="text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
      </div>
    </div>
  );
};