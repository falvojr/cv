export function formatYearRange(startYear: number, endYear?: number) {
  if (!endYear) {
    return `${startYear} - atual`;
  }

  return `${startYear} - ${endYear}`;
}
