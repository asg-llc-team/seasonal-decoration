import {
  getDecorationCalendarParts,
  type UlaanbaatarCalendarParts,
} from '../shared/preview';

/** Nov 7 – Nov 20 in Ulaanbaatar time */
const SEASON_START = { month: 10, day: 7 };
const SEASON_END = { month: 10, day: 20 };

/** Nov 14 — Чингис хааны өдөр */
const CHINGGIS_DAY = { month: 10, day: 14 };

export type ChinggisDayMood = 'countdown' | 'greeting';

function isInChinggisDayWindow(parts: UlaanbaatarCalendarParts): boolean {
  const { month, day } = parts;

  if (month !== SEASON_START.month) return false;
  return day >= SEASON_START.day && day <= SEASON_END.day;
}

export function isChinggisDaySeason(now = new Date()): boolean {
  return isInChinggisDayWindow(getDecorationCalendarParts(now));
}

export function getChinggisDayMood(now = new Date()): {
  mood: ChinggisDayMood;
  year: number;
  daysUntil?: number;
} {
  const { year, month, day } = getDecorationCalendarParts(now);

  if (
    month === CHINGGIS_DAY.month &&
    day >= CHINGGIS_DAY.day &&
    day <= SEASON_END.day
  ) {
    return { mood: 'greeting', year };
  }

  const today = new Date(year, month, day);
  const chinggisDay = new Date(year, CHINGGIS_DAY.month, CHINGGIS_DAY.day);
  const daysUntil = Math.round(
    (chinggisDay.getTime() - today.getTime()) / 86_400_000,
  );
  return { mood: 'countdown', year, daysUntil };
}

export function getChinggisDayTitle(): string {
  return 'Чингис хааны өдөр';
}

export function getChinggisDaySubtitle(
  mood: ReturnType<typeof getChinggisDayMood>,
): string {
  if (mood.mood === 'greeting') return 'Мөнх мандтугай';

  const days = mood.daysUntil ?? 0;
  if (days <= 0) return 'Өнөөдөр!';
  if (days === 1) return 'Маргааш!';
  return `${days} хоног үлдлээ`;
}
