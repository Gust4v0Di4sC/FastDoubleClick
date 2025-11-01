import type { TimeRecord } from "../types";

export class DateUtils {
  static getWeekOfYear(date: Date): number {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  }

  static createTimeRecord(): TimeRecord {
    const now = new Date();
    return {
      id: `${now.getTime()}-${Math.random()}`,
      timestamp: now.toISOString(),
      date: now.toLocaleDateString('pt-BR'),
      time: now.toLocaleTimeString('pt-BR'),
      day: now.getDate(),
      month: now.getMonth() + 1,
      year: now.getFullYear(),
      weekOfYear: this.getWeekOfYear(now)
    };
  }

  static getCurrentYear(): number {
    return new Date().getFullYear();
  }

  static getMonthNames(): string[] {
    return [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
  }
}