export enum DayStatus { open, completed, failed};

export interface Day {
  dayInMonth: number;
  dayInWeek: number;
  date: Date;
  status: DayStatus;
}
