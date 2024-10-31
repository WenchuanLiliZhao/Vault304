import { GetTodayDateArray } from "./components/Functions/Date";

const info = {
  title: "VAULT 304",
  started: [2024, 10, 14],
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
};

export { SiteInfo };
