export const DateFormatter = (date: [number, number, number]): [string, string, string] => {
  const [year, month, day] = date;
  const dateObj = new Date(year, month - 1, day);
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "2-digit" };
  const formattedDate = dateObj.toLocaleDateString("en-GB", options);

  // Split the formatted date string to get the desired parts
  const [dayPart, monthPart, yearPart] = formattedDate.replace(',', '').split(" ");

  return [yearPart, monthPart, dayPart];
};

export function GetTodayDateArray(): [number, number, number] {
  const today = new Date();
  const year = today.getFullYear(); // Use the full year, not just the last two digits
  const month = today.getMonth() + 1; // Months are zero-indexed, so +1
  const day = today.getDate();

  return [year, month, day];
}

