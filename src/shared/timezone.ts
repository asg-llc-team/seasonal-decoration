const TIMEZONE = 'Asia/Ulaanbaatar';

export function getUlaanbaatarDate(now = new Date()): Date {
  return new Date(now.toLocaleString('en-US', { timeZone: TIMEZONE }));
}

export function getUlaanbaatarParts(now = new Date()) {
  const date = getUlaanbaatarDate(now);
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
  };
}
