import React, { useState, useEffect } from 'react';
import { RegisterPage } from './pages/RegisterPage';
import { RecordsPage } from './pages/RecordsPage';
import { Navigation } from './components/Layout/Navigation';
import { Header } from './components/Layout/Header';
import { DateUtils } from './utils/dateManager';
import { TimeRecordsService } from './services/service';
import type { TimeRecord } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'register' | 'records'>('register');
  const [records, setRecords] = useState<TimeRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const service = new TimeRecordsService();

  useEffect(() => {
    loadRecords();
  },[]);

  const loadRecords = async () => {
    setIsLoading(true);
    try {
      const data = await service.getAllRecords();
      setRecords(data);
    } catch (error) {
      console.error('Erro ao carregar registros:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async () => {
    const newRecord = DateUtils.createTimeRecord();
    const created = await service.createRecord(newRecord);
    setRecords(prev => [...prev, created]);
  };

  const handleDelete = async (id: string) => {
    await service.deleteRecord(id);
    setRecords(prev => prev.filter(record => record.id !== id));
  };

  const lastRecord = records[records.length - 1];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <Header title="Fast Double Click" />
        
        <Navigation
          currentPage={currentPage}
          recordsCount={records.length}
          onNavigate={setCurrentPage}
        />

        {currentPage === 'register' ? (
          <RegisterPage lastRecord={lastRecord} onRegister={handleRegister} />
        ) : (
          <RecordsPage records={records} onDelete={handleDelete} />
        )}
      </div>
    </div>
  );
};

export default App;
