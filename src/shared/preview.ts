import { getUlaanbaatarParts } from './timezone';

export type UlaanbaatarCalendarParts = {
  year: number;
  month: number;
  day: number;
};

/** Whether local preview is active (`NEXT_PUBLIC_SEASONAL_DECORATION_PREVIEW_DATE` is set). */
export function isDecorationPreviewMode(): boolean {
  return parseDecorationPreviewDate() !== null;
}

/** Parse `NEXT_PUBLIC_SEASONAL_DECORATION_PREVIEW_DATE` (YYYY-MM-DD). */
export function parseDecorationPreviewDate(): UlaanbaatarCalendarParts | null {
  const raw = process.env.NEXT_PUBLIC_SEASONAL_DECORATION_PREVIEW_DATE?.trim();
  if (!raw) return null;

  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(raw);
  if (!match) return null;

  const year = Number(match[1]);
  const month = Number(match[2]) - 1;
  const day = Number(match[3]);

  if (
    !Number.isInteger(year) ||
    !Number.isInteger(month) ||
    !Number.isInteger(day) ||
    month < 0 ||
    month > 11 ||
    day < 1 ||
    day > 31
  ) {
    return null;
  }

  return { year, month, day };
}

/**
 * Calendar day for season/copy logic.
 * Preview date when set; otherwise today in Asia/Ulaanbaatar.
 */
export function getDecorationCalendarParts(
  now = new Date(),
): UlaanbaatarCalendarParts {
  return parseDecorationPreviewDate() ?? getUlaanbaatarParts(now);
}
