import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="fixed top-4 right-4 z-50 p-3 rounded-full 
                 bg-white dark:bg-gray-800 
                 border-2 border-gray-200 dark:border-gray-600
                 hover:border-blue-500 dark:hover:border-blue-400
                 shadow-lg hover:shadow-xl
                 transition-all duration-300 transform hover:scale-110"
      aria-label="Alternar tema"
      title={isDark ? 'Modo Claro' : 'Modo Escuro'}
    >
      {isDark ? (
        <Sun size={24} className="text-yellow-500 animate-spin-slow" />
      ) : (
        <Moon size={24} className="text-gray-700" />
      )}
    </button>
  );
};