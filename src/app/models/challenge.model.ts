import { Day, DayStatus } from './day.model';

export class Challenge {
  private _days: Day[] = [];

  constructor(
    public title: string,
    public description: string,
    public year: number,
    public month: number,
  ) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i < daysInMonth; i++) {
      const date = new Date(year, month, i);
      const dayInWeek = date.getDay();
      this._days.push({
        dayInMonth: i,
        dayInWeek,
        date,
        status: DayStatus.open,
      });
    }
  }

  get currentDay() {
    return this._days.find((d) => d.dayInMonth === new Date().getDate());
  }

  get days() {
    return [...this._days];
  }
}
