import React, { useState } from "react";
import styles from "./styles.module.css";
import dayjs from "dayjs";

export default () => {
  const startOfWeek = dayjs().startOf("month");

  const weekdays = new Array(30)
    .fill(startOfWeek)
    .map((day, idx) => day.add(idx, "day").format("dddd, MMMM D YYYY"));

  const calendar = weekdays.map((day, key) => {
    const eps = [];
    let duration = "";
    if (key === 1) {
      eps.push({ title: "The office S1E1 | 24m" });
      eps.push({ title: "The office S1E2 | 24m" });
      duration = "48m";
    }
    if (key === 2) {
      eps.push({ title: "Game of thrones S1E1 | 24m" });
      eps.push({ title: "Game of thrones S1E2 | 24m" });
      eps.push({ title: "Game of thrones S1E3 | 24m" });
      eps.push({ title: "Game of thrones S1E4 | 24m" });
      duration = "96m";
    }
    if (key === 3) {
      eps.push({ title: "Stranger things S1E1 | 24m" });
      eps.push({ title: "Stranger things S1E2 | 24m" });
      duration = "48m";
    }
    if (key === 6) {
      eps.push({ title: "Below Deck S1E1 | 24m" });
      duration = "24m";
    }
    if (key === 8) {
      eps.push({ title: "kardashians S1E1 | 24m" });
      duration = "24m";
    }
    if (key === 10) {
      eps.push({ title: "First Date S1E1 | 24m" });
      eps.push({ title: "First Date S1E2 | 24m" });
      duration = "48m";
    }
    return { day, views: eps, duration };
  });

  const [episodes, setEpisodes] = useState(calendar);

  // const onClick = (item, index) => {
  //   console.log(item, index);
  //   setEpisodes(
  //     episodes.map((episode, key) =>
  //       key === index
  //         ? {
  //             ...episode,
  //             views: [...episode.views, { title: "The office S1E2" }],
  //           }
  //         : { ...episode }
  //     )
  //   );
  // };

  return (
    <div className={styles.gridContainer}>
      {episodes.map((cal, count) => (
        <div key={cal.day} className={styles.gridItem}>
          <div
            className={`${count === 10 ? styles.today : ""}`}
            style={{ marginBottom: "15px" }}
          >
            {cal.day}
          </div>
          {cal.views.map((eps) => (
            <div key={eps.title} className="inline-flex items-center">
              <div className={styles.dot} />
              <div className={styles.show}>{eps.title}</div>
              <div className="absolute bottom-5 text-xs">{cal.duration}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
