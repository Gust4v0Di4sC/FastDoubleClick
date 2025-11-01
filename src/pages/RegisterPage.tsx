import React, { useState } from 'react';
import { Clock, CheckCircle } from 'lucide-react';
import type { TimeRecord } from '../types';

interface RegisterPageProps {
  lastRecord?: TimeRecord;
  onRegister: () => Promise<void>;
}

const AnimatedClock: React.FC = () => {
  return (
    <div className="relative w-32 h-32 mx-auto mb-4">
      {/* Círculo externo do relógio */}
      <div className="absolute inset-0 rounded-full border-4 border-white dark:border-blue-400"></div>
      
      {/* Centro do relógio */}
      <div className="absolute top-1/2 left-1/2 w-3 h-3 -mt-1.5 -ml-1.5 rounded-full bg-blue-600 dark:bg-blue-400 z-10"></div>
      
      {/* Ponteiro das horas (gira devagar) */}
      <div 
        className="absolute top-1/2 left-1/2 w-1 h-10 -ml-0.5 bg-gray-700 dark:bg-gray-300 rounded-full origin-bottom"
        style={{
          transform: 'translateY(-100%)',
          animation: 'rotate-hour 53200s linear infinite'
        }}
      ></div>
      
      {/* Ponteiro dos minutos (gira médio) */}
      <div 
        className="absolute top-1/2 left-1/2 w-1 h-14 -ml-0.5 bg-blue-600 dark:bg-blue-400 rounded-full origin-bottom"
        style={{
          transform: 'translateY(-100%)',
          animation: 'rotate-minute 3600s linear infinite'
        }}
      ></div>
      
      {/* Ponteiro dos segundos (gira rápido) */}
      <div 
        className="absolute top-1/2 left-1/2 w-0.5 h-16 -ml-0.25 bg-red-500 rounded-full origin-bottom"
        style={{
          transform: 'translateY(-100%)',
          animation: 'rotate-second 60s linear infinite'
        }}
      ></div>
      
      {/* Marcadores de horas */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute top-2 left-1/2 w-0.5 h-3 bg-gray-400 dark:bg-gray-500"
          style={{
            transform: `rotate(${i * 30}deg) translateX(-50%)`,
            transformOrigin: 'center 58px'
          }}
        ></div>
      ))}

      <style>{`
        @keyframes rotate-second {
          from { transform: translateY(-100%) rotate(0deg); }
          to { transform: translateY(-100%) rotate(360deg); }
        }
        @keyframes rotate-minute {
          from { transform: translateY(-100%) rotate(0deg); }
          to { transform: translateY(-100%) rotate(360deg); }
        }
        @keyframes rotate-hour {
          from { transform: translateY(-100%) rotate(0deg); }
          to { transform: translateY(-100%) rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

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
    <div className="bg-gray-800 rounded-lg shadow-lg p-8">
      <div className="text-center">
        <div className="mb-8">
          <AnimatedClock />
          <h2 className="text-2xl font-bold text-gray-200 mb-2">
            Registrar Horário Atual
          </h2>
          <p className="text-gray-200">
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