import type { TimeRecord } from "../types";

export class ApiService {
  private readonly BASE_URL = 'http://localhost:3001';
  private readonly ENDPOINT = '/timeRecords';

  async getAllRecords(): Promise<TimeRecord[]> {
    try {
      const response = await fetch(`${this.BASE_URL}${this.ENDPOINT}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar registros:', error);
      throw new Error('Falha ao carregar registros do servidor');
    }
  }

  async createRecord(record: TimeRecord): Promise<TimeRecord> {
    try {
      const response = await fetch(`${this.BASE_URL}${this.ENDPOINT}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(record),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao criar registro:', error);
      throw new Error('Falha ao salvar registro no servidor');
    }
  }

  async deleteRecord(id: string): Promise<void> {
    try {
      const response = await fetch(`${this.BASE_URL}${this.ENDPOINT}/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Erro ao deletar registro:', error);
      throw new Error('Falha ao deletar registro do servidor');
    }
  }

  async updateRecord(id: string, record: Partial<TimeRecord>): Promise<TimeRecord> {
    try {
      const response = await fetch(`${this.BASE_URL}${this.ENDPOINT}/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(record),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao atualizar registro:', error);
      throw new Error('Falha ao atualizar registro no servidor');
    }
  }

  // Método auxiliar para verificar se o servidor está online
  async checkServerHealth(): Promise<boolean> {
    try {
      const response = await fetch(`${this.BASE_URL}/timeRecords`);
      return response.ok;
    } catch (error) {
      console.error('Erro ao verificar servidor:', error);
      return false;
    }
  }
}