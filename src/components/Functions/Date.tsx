export const DateFormatter = (
  date: [number, number, number],
  format?: Intl.DateTimeFormatOptions
): [string, string, string] => {
  const [year, month, day] = date;
  // Construct a Date object using the provided year, month, and day.
  const dateObj = new Date(year, month - 1, day);

  // Set the options for date formatting; use the provided format or default to a specific format if none is provided.
  const options: Intl.DateTimeFormatOptions = format ?? {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };

  // Format the date using Intl.DateTimeFormat and specify "en-GB" locale or modify as desired.
  const formattedDate = dateObj.toLocaleDateString("en-GB", options);

  // Handle the case where the full format might not yield the expected splits.
  const parts = formattedDate
    .replace(",", "")
    .split(" ");

  // Determine the positions based on typical "en-GB" formatted dates
  let yearPart = '';
  let monthPart = '';
  let dayPart = '';

  // Assign properly based on the number of parts received
  if (parts.length === 3) {
    [dayPart, monthPart, yearPart] = parts;
  } else if (parts.length === 2) {
    if (options.year) { // Year is likely missing, so assign positions for month and day
      [monthPart, dayPart] = parts;
      yearPart = ''; // Default to empty if year is absent
    } else {
      // If there's no month, assume incorrect usage and throw an error
      throw new Error("Unexpected date format; can't split into components.");
    }
  } else {
    throw new Error("Unexpected date format; can't split into components.");
  }

  return [yearPart, monthPart, dayPart];
};

export function GetTodayDateArray(): [number, number, number] {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // Months are zero-indexed, so +1 for human-readable month
  const day = today.getDate();

  return [year, month, day];
}


export function GetWeekDay(dateArray: [number, number, number]): string {
  const [year, month, day] = dateArray;

  // Create a Date object using the input. Note that JavaScript's Date months are zero-indexed.
  const date = new Date(year, month - 1, day);

  // Define an array mapping the getDay() output to weekday names.
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Use getDay() method to find the day of the week.
  const dayOfWeek = date.getDay();

  // Return the corresponding day name.
  return weekDays[dayOfWeek];
}