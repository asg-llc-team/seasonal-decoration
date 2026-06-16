import {
  getDecorationCalendarParts,
  type UlaanbaatarCalendarParts,
} from '../shared/preview';

/** Aug 25 – Sep 10 in Ulaanbaatar time */
const SEASON_START = { month: 7, day: 25 };
const SEASON_END = { month: 8, day: 10 };

/** Sep 1 — first day of school */
const SCHOOL_START = { month: 8, day: 1 };

export type SchoolYearMood = 'countdown' | 'greeting';

function isInSchoolYearWindow(parts: UlaanbaatarCalendarParts): boolean {
  const { month, day } = parts;

  if (month < SEASON_START.month || month > SEASON_END.month) return false;
  if (month === SEASON_START.month) return day >= SEASON_START.day;
  if (month === SEASON_END.month) return day <= SEASON_END.day;
  return false;
}

export function isSchoolYearSeason(now = new Date()): boolean {
  return isInSchoolYearWindow(getDecorationCalendarParts(now));
}

export function getSchoolYearMood(now = new Date()): {
  mood: SchoolYearMood;
  year: number;
  daysUntil?: number;
} {
  const { year, month, day } = getDecorationCalendarParts(now);

  if (
    month === SCHOOL_START.month &&
    day >= SCHOOL_START.day &&
    day <= SEASON_END.day
  ) {
    return { mood: 'greeting', year };
  }

  const today = new Date(year, month, day);
  const schoolStart = new Date(year, SCHOOL_START.month, SCHOOL_START.day);
  const daysUntil = Math.round(
    (schoolStart.getTime() - today.getTime()) / 86_400_000,
  );
  return { mood: 'countdown', year, daysUntil };
}

export function getSchoolYearTitle(): string {
  return 'Шинэ хичээлийн жил';
}

export function getSchoolYearSubtitle(
  mood: ReturnType<typeof getSchoolYearMood>,
): string {
  if (mood.mood === 'greeting') return 'Амжилт хүсье';

  const days = mood.daysUntil ?? 0;
  if (days <= 0) return 'Өнөөдөр эхэлнээ!';
  if (days === 1) return 'Маргааш эхэлнэ!';
  return `${days} хоног үлдлээ`;
}
