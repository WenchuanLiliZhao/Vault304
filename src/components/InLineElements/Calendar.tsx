// import React from 'react';
// import { List, AutoSizer } from 'react-virtualized';

// // Helper function to generate days in a month
// const generateMonthDays = (year: number, month: number): Date[] => {
//   const date = new Date(year, month, 1);
//   const days: Date[] = [];
//   while (date.getMonth() === month) {
//     days.push(new Date(date));
//     date.setDate(date.getDate() + 1);
//   }
//   return days;
// };

// const MonthCalendar: React.FC<{ year: number; month: number }> = ({ year, month }) => {
//   const days = generateMonthDays(year, month);
//   const startDay = new Date(year, month, 1).getDay();

//   // Prepend blank days for alignment with the weekday
//   const blankDays = Array.from({ length: startDay }, () => null);

//   const today = new Date();

//   return (
//     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', padding: '10px' }}>
//       <div style={{ gridColumn: 'span 7', textAlign: 'center', fontWeight: 'bold' }}>
//         {new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' })}
//       </div>
//       <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
//       {blankDays.map((_, index) => (
//         <div key={`blank-${index}`} />
//       ))}
//       {days.map((day, index) => (
//         <div
//           key={index}
//           style={{
//             padding: '10px',
//             backgroundColor: (day.getDate() === today.getDate() &&
//                              day.getMonth() === today.getMonth() &&
//                              day.getFullYear() === today.getFullYear()) ? 
//                              'lightblue' : 'transparent'
//           }}
//         >
//           {day.getDate()}
//         </div>
//       ))}
//     </div>
//   );
// };

// // Infinite scroll calendar component
// export const InfiniteScrollableCalendar: React.FC = () => {
//   const today = new Date();
//   const currentYear = today.getFullYear();
//   const currentMonth = today.getMonth();

//   const rowHeight = 200; // Adjust this based on your layout

//   const cellRenderer = ({ index, key, style }) => {
//     const monthToRender = (currentMonth + index) % 12;
//     const yearToRender = currentYear + Math.floor((currentMonth + index) / 12);

//     return (
//       <div key={key} style={style}>
//         <MonthCalendar year={yearToRender} month={monthToRender} />
//       </div>
//     );
//   };

//   return (
//     <div style={{ width: '100%', height: '100vh' }}>
//       <AutoSizer>
//         {({ height, width }) => (
//           <List
//             width={width}
//             height={height}
//             rowHeight={rowHeight}
//             rowCount={1000} // Define an arbitrarily large number
//             rowRenderer={cellRenderer}
//           />
//         )}
//       </AutoSizer>
//     </div>
//   );
// };
