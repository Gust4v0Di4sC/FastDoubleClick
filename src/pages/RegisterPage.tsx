import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle } from 'lucide-react';
import type { TimeRecord } from '../types';

interface RegisterPageProps {
  lastRecord?: TimeRecord;
  onRegister: () => Promise<void>;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ lastRecord, onRegister }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleRegister = async () => {
    setIsRegistering(true);
    try {
      await onRegister();
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    } catch (error) {
      alert(`Erro ao registrar horário: ${error}`);
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="text-center">
        <div className="mb-8">
          <Calendar size={64} className="mx-auto text-blue-600 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Registrar Horário Atual
          </h2>
          <p className="text-gray-600">
            Clique no botão abaixo para registrar a data e hora atual
          </p>
        </div>
        
        <button
          onClick={handleRegister}
          disabled={isRegistering}
          className={`font-bold py-4 px-8 rounded-lg shadow-lg transition-all transform ${
            isRegistering 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-green-600 hover:bg-green-700 hover:scale-105 active:scale-95'
          } text-white`}
        >
          {isRegistering ? (
            <>Registrando...</>
          ) : (
            <>
              <Clock size={24} className="inline mr-2" />
              Registrar Agora
            </>
          )}
        </button>

        {showSuccess && (
          <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg flex items-center justify-center gap-2">
            <CheckCircle size={20} />
            <span className="font-semibold">Horário registrado com sucesso!</span>
          </div>
        )}

        {lastRecord && (
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">
              Último registro: <span className="font-semibold">{lastRecord.date}</span> às{' '}
              <span className="font-semibold">{lastRecord.time}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};