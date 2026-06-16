import {
  getDecorationCalendarParts,
  type UlaanbaatarCalendarParts,
} from '../shared/preview';

/** Naadam season window in Ulaanbaatar time (Jun 25 – Jul 20). */
const SEASON_START = { month: 5, day: 25 };
const SEASON_END = { month: 6, day: 20 };

/** July 11 — National Naadam opening ceremony */
const NAADAM_DAY = { month: 6, day: 11 };

export type NaadamMood = 'countdown' | 'festival';

function isInNaadamWindow(parts: UlaanbaatarCalendarParts): boolean {
  const { month, day } = parts;

  if (month < SEASON_START.month || month > SEASON_END.month) return false;
  if (month === SEASON_START.month) return day >= SEASON_START.day;
  if (month === SEASON_END.month) return day <= SEASON_END.day;
  return false;
}

export function isNaadamSeason(now = new Date()): boolean {
  return isInNaadamWindow(getDecorationCalendarParts(now));
}

export function getNaadamMood(now = new Date()): {
  mood: NaadamMood;
  year: number;
  daysUntil?: number;
} {
  const { year, month, day } = getDecorationCalendarParts(now);

  if (
    month === NAADAM_DAY.month &&
    day >= NAADAM_DAY.day &&
    day <= SEASON_END.day
  ) {
    return { mood: 'festival', year };
  }

  const today = new Date(year, month, day);
  const naadamStart = new Date(year, NAADAM_DAY.month, NAADAM_DAY.day);
  const daysUntil = Math.round(
    (naadamStart.getTime() - today.getTime()) / 86_400_000,
  );
  return { mood: 'countdown', year, daysUntil };
}

export function getNaadamTitle(mood: ReturnType<typeof getNaadamMood>): string {
  return `Наадам ${mood.year}`;
}

export function getNaadamSubtitle(
  mood: ReturnType<typeof getNaadamMood>,
): string {
  if (mood.mood === 'festival') return 'Сайхан наадаарай';

  const days = mood.daysUntil ?? 0;
  if (days <= 0) return 'Өнөөдөр эхэлнээ!';
  if (days === 1) return 'Маргааш эхэлнэ!';
  return `${days} хоног үлдлээ`;
}
