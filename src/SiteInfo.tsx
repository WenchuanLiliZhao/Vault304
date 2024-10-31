import { GetTodayDateArray } from "./components/Functions/Date";

const info = {
  title: "VAULT 304",
  started: [2024, 10, 14],
  summary: "Vivamus nunc felis, interdum sed accumsan at, finibus et dui. Aenean sed massa dictum, condimentum felis sit amet, suscipit felis. Donec a tempor enim. In ut orci sit amet lacus bibendum convallis. Sed ac placerat orci. Duis orci diam, eleifend sit amet imperdiet ac, hendrerit sit amet mauris."
}

const thisYear = GetTodayDateArray()[0]
let years

if (info.started[0] == thisYear) {
  years = `${thisYear}`
} else {
  years = `${info.started} – ${thisYear}`
}

const SiteInfo = {
  title: info.title,
  copyRight: `Copyright © ${years} ${info.title}`,
  summary: info.summary
};

export { SiteInfo };
