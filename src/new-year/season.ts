import {
  getDecorationCalendarParts,
  type UlaanbaatarCalendarParts,
} from '../shared/preview';

/** Dec 20 – Jan 5 in Ulaanbaatar time */
const SEASON_START = { month: 11, day: 20 };
const SEASON_END = { month: 0, day: 5 };

/** Jan 1 */
const NEW_YEAR_DAY = { month: 0, day: 1 };

export type NewYearMood = 'countdown' | 'greeting';

function isInNewYearWindow(parts: UlaanbaatarCalendarParts): boolean {
  const { month, day } = parts;

  if (month === SEASON_START.month && day >= SEASON_START.day) return true;
  if (month === SEASON_END.month && day <= SEASON_END.day) return true;
  return false;
}

export function isNewYearSeason(now = new Date()): boolean {
  return isInNewYearWindow(getDecorationCalendarParts(now));
}

/** December previews the upcoming year; January uses the current year. */
export function getNewYearDisplayYear(parts: UlaanbaatarCalendarParts): number {
  if (parts.month === SEASON_START.month) return parts.year + 1;
  return parts.year;
}

export function getNewYearMood(now = new Date()): {
  mood: NewYearMood;
  year: number;
  daysUntil?: number;
} {
  const parts = getDecorationCalendarParts(now);
  const { month, day } = parts;
  const year = getNewYearDisplayYear(parts);

  if (
    month === NEW_YEAR_DAY.month &&
    day >= NEW_YEAR_DAY.day &&
    day <= SEASON_END.day
  ) {
    return { mood: 'greeting', year };
  }

  const calendarYear = parts.year;
  const today = new Date(calendarYear, month, day);
  const newYearStart =
    month === SEASON_START.month
      ? new Date(calendarYear + 1, NEW_YEAR_DAY.month, NEW_YEAR_DAY.day)
      : new Date(calendarYear, NEW_YEAR_DAY.month, NEW_YEAR_DAY.day);
  const daysUntil = Math.round(
    (newYearStart.getTime() - today.getTime()) / 86_400_000,
  );

  return { mood: 'countdown', year, daysUntil };
}

export function getNewYearTitle(
  mood: ReturnType<typeof getNewYearMood>,
): string {
  return `Шинэ он ${mood.year}`;
}

export function getNewYearSubtitle(
  mood: ReturnType<typeof getNewYearMood>,
): string {
  if (mood.mood === 'greeting') return 'Шинэ жилийн мэнд';

  const days = mood.daysUntil ?? 0;
  if (days <= 0) return 'Өнөөдөр эхэлнээ!';
  if (days === 1) return 'Маргааш эхэлнэ!';
  return `${days} хоног үлдлээ`;
}
