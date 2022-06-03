import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

type Dateish = Date | string;

export const checkBetween = (
  date: Dateish,
  start: Dateish,
  end: Dateish,
  allowEqual = true
): boolean => {
  if (!date) return false;
  const target = dayjs(date);
  const isBetween = target.isAfter(start) && target.isBefore(end);
  const isSame = target.isSame(start) || target.isSame(end);

  return allowEqual ? isSame || isBetween : isBetween;
};

/** Checks whether the dateA is before dateB */
export const checkBefore = (dateA: Dateish, dateB: Dateish) => {
  return dayjs(dateA).isBefore(dateB);
};
/** Checks whether the dateA is after dateB */
export const checkAfter = (dateA: Dateish, dateB: Dateish) => {
  return dayjs(dateA).isAfter(dateB);
};

/** Returns the age in years as a number */
export const getAgeInYears = (date: Dateish): number => {
  return dayjs().diff(date, "years");
};

export const getFromNow = (date: Dateish): string => {
  return dayjs(date).fromNow();
};

export const getMinutesFromNow = (date: Dateish): number => {
  return dayjs(date).diff(new Date(), "minutes");
};

export const getSecondsFromNow = (date: Dateish): number => {
  return dayjs(date).diff(new Date(), "seconds");
};

export const addMinutes = (date: Dateish, minutes: number): Date => {
  return dayjs(date).add(minutes, "minutes").toDate();
};

export const formatDate = (date: Dateish, format: string) => {
  if (!date) return "";
  return dayjs(date).format(format);
};

export const formatDateOnly = (date: string, format: string) => {
  if (!date) return "";

  // If the time portion exists, remove it. The time portion can cause issues when set to midnight (i.e. 2021-11-29T:00:00:00Z).
  // When formatting the date, it is adjusted to local time from UTC, possibly causing the date to appear as the day before.
  const timeIndex = date.indexOf("T");
  if (timeIndex >= 0) {
    date = date.substring(0, timeIndex);
  }

  return dayjs(date).format(format);
};

export const parseDate = (date: Dateish) => {
  if (!date) return null;
  return dayjs(date).toDate();
};

export type DateUnit = "month" | "week" | "day";

export const prev = (date: string, unit: DateUnit, format: string) =>
  dayjs(date).add(-1, unit).format(format);
export const next = (date: string, unit: DateUnit, format: string) =>
  dayjs(date).add(1, unit).format(format);

export const checkIsUnder18 = (accountOwner) => {
  if (!accountOwner) return false;

  const dob = accountOwner?.dob;
  if (!dob) return false;
  return getAgeInYears(dob) < 18;
};

export const checkOver59AndAHalfYears = (date: Dateish) => {
  // 714 months = 59.5 years
  return dayjs().diff(date, "months") >= 714;
};
