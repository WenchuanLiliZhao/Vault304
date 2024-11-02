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

  // Get days from the previous month
  const prevMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
  const prevYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
  const lastDayOfPrevMonth = getDaysInMonth(prevYear, prevMonth);

  // Generate days for the calendar
  const calendarDays = [];
  
  // Fill in the last days of the previous month
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    calendarDays.push(
      <td key={`prev-${i}`} className="not-current-month">
        {lastDayOfPrevMonth - i}
      </td>
    );
  }

  // Fill in the current month days
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

  // Calculate how many days required to fill the last week
  const nextDaysStart = calendarDays.length % 7;
  
  // Fill in the first days of the next month
  if (nextDaysStart !== 0) {
    const nextFillDays = 7 - nextDaysStart;
    for (let i = 1; i <= nextFillDays; i++) {
      calendarDays.push(
        <td key={`next-${i}`} className="not-current-month">
          {i}
        </td>
      );
    }
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

