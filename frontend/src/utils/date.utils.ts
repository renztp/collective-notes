export function formatDateToMonthDayYear(date: Date): string {
  const monthNames: string[] = ["January", "February", "March", "April", "May", "June",
                                "July", "August", "September", "October", "November", "December"];
  const d = new Date(date);
  let day: string = '' + d.getDate();
  const year: number = d.getFullYear();
  const monthName: string = monthNames[d.getMonth()];

  if (day.length < 2) 
      day = '0' + day;

  return `${monthName}, ${day}, ${year}`;
}