"use client";

import chalk from "chalk";
import { useReportWebVitals } from "next/web-vitals";

export default function WebVitals() {
  useReportWebVitals((metric) => {
    switch (metric.name) {
      //   case "FCP": {
      //     if (metric.rating === "good")
      //       console.log(chalk.bgGreen.black("GOOD"), "FCP");
      //     if (metric.rating === "poor")
      //       console.log(chalk.yellow.black("GOOD"), "FCP");
      //   }
      case "LCP": {
        // if (metric.rating === "good") { console.log(chalk.bgGreen.black("GOOD"), "LCP"); }
        // if (metric.rating === "poor") console.log(chalk.yellow.black("GOOD"), "LCP");
      }
      // ...
    }
  });

  return null;
}
