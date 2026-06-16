import {
  getDecorationCalendarParts,
  type UlaanbaatarCalendarParts,
} from '../shared/preview';

/** Nov 19 – Dec 3 in Ulaanbaatar time */
const SEASON_START = { month: 10, day: 19 };
const SEASON_END = { month: 11, day: 3 };

/** Nov 26 — Бүгд Найрамдах өдөр */
const REPUBLIC_DAY = { month: 10, day: 26 };

export type RepublicDayMood = 'countdown' | 'greeting';

function isInRepublicDayWindow(parts: UlaanbaatarCalendarParts): boolean {
  const { month, day } = parts;

  if (month === SEASON_START.month && day >= SEASON_START.day) return true;
  if (month === SEASON_END.month && day <= SEASON_END.day) return true;
  return false;
}

export function isRepublicDaySeason(now = new Date()): boolean {
  return isInRepublicDayWindow(getDecorationCalendarParts(now));
}

export function getRepublicDayMood(now = new Date()): {
  mood: RepublicDayMood;
  year: number;
  daysUntil?: number;
} {
  const { year, month, day } = getDecorationCalendarParts(now);

  if (month === REPUBLIC_DAY.month && day >= REPUBLIC_DAY.day) {
    return { mood: 'greeting', year };
  }

  if (month === SEASON_END.month && day <= SEASON_END.day) {
    return { mood: 'greeting', year };
  }

  const today = new Date(year, month, day);
  const republicDay = new Date(year, REPUBLIC_DAY.month, REPUBLIC_DAY.day);
  const daysUntil = Math.round(
    (republicDay.getTime() - today.getTime()) / 86_400_000,
  );
  return { mood: 'countdown', year, daysUntil };
}

export function getRepublicDayTitle(): string {
  return 'Бүгд Найрамдах өдөр';
}

export function getRepublicDaySubtitle(
  mood: ReturnType<typeof getRepublicDayMood>,
): string {
  if (mood.mood === 'greeting') return 'Баярын мэнд';

  const days = mood.daysUntil ?? 0;
  if (days <= 0) return 'Өнөөдөр!';
  if (days === 1) return 'Маргааш!';
  return `${days} хоног үлдлээ`;
}
