
interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="bg-blue-900 dark:bg-gray-800  rounded-lg shadow-lg p-6 mb-6">
      <div className="flex items-center justify-center gap-3">
        <h1 className="text-3xl font-bold text-gray-100 dark:text-gray-200">{title}</h1>
      </div>
    </div>
  );
};