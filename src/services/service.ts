import type { TimeRecord } from "../types";

export class TimeRecordsService {
  private readonly STORAGE_KEY = 'timeRecords';

  async getAllRecords(): Promise<TimeRecord[]> {
    try {
      await new Promise(resolve => setTimeout(resolve, 100)); // Simula delay de API
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Erro ao buscar registros:', error);
      throw error;
    }
  }

  async createRecord(record: TimeRecord): Promise<TimeRecord> {
    try {
      await new Promise(resolve => setTimeout(resolve, 100));
      const records = await this.getAllRecords();
      const updatedRecords = [...records, record];
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedRecords));
      return record;
    } catch (error) {
      console.error('Erro ao criar registro:', error);
      throw error;
    }
  }

  async deleteRecord(id: string): Promise<void> {
    try {
      await new Promise(resolve => setTimeout(resolve, 100));
      const records = await this.getAllRecords();
      const updatedRecords = records.filter(record => record.id !== id);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedRecords));
    } catch (error) {
      console.error('Erro ao deletar registro:', error);
      throw error;
    }
  }
}