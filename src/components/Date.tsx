
interface DateFormatterProps {
  date: [number, number, number];
}

export const DateFormatter: React.FC<DateFormatterProps> = ({ date }) => {
  const [year, month, day] = date;

  const formatDate = () => {
    const dateObj = new Date(year, month - 1, day); // 创建 Date 对象，月份从 0 开始
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" };
    return dateObj.toLocaleDateString("en-GB", options);
  };

  return formatDate();
};


export function GetTodayDateArray(): [number, number, number] {
  const today = new Date();
  const year = today.getFullYear() % 100; // Get last two digits of the year
  const month = today.getMonth() + 1; // Months are zero-indexed, so +1
  const day = today.getDate();

  return [year, month, day];
}
