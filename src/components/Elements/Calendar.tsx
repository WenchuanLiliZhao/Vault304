import React from 'react';

// Helper function to get the number of days in a month
const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

// Helper function to get the first day of the month
const getFirstDayOfMonth = (year: number, month: number): number => {
  return new Date(year, month, 1).getDay();
};

// Helper function to get month name
const getMonthName = (month: number): string => {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return monthNames[month];
};

export const Calendar: React.FC = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDate = today.getDate();

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);

  // Generate days for the calendar
  const calendarDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(<td key={`empty-${i}`}></td>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(
      <td
        key={day}
        className={day === currentDate ? 'today' : ''}
      >
        {day}
      </td>
    );
  }

  const weeks: JSX.Element[] = [];
  for (let i = 0; i < calendarDays.length; i += 7) {
    weeks.push(<tr key={i}>{calendarDays.slice(i, i + 7)}</tr>);
  }

  return (
    <div className={`calendar`}>
      <div className={`calendar-title`}>{`${getMonthName(currentMonth)} ${currentYear}`}</div>
      <table className={`calendar-table`}>
        <thead className={`calendar-header`}>
          <tr>
            <th>S</th>
            <th>M</th>
            <th>T</th>
            <th>W</th>
            <th>T</th>
            <th>F</th>
            <th>S</th>
          </tr>
        </thead>
        <tbody className={`calendar-body`}>{weeks}</tbody>
      </table>
    </div>
  );
};
