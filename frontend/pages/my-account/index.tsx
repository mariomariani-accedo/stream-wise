import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

import Header from "@components/Header";

const MyAccount = () => {
  const USER_USAGE_TIME_KEY = "USER_USAGE_TIME_KEY";
  const [usageTime, setUsageTime] = useState<string>();

  useEffect(() => {
    const time = localStorage.getItem(USER_USAGE_TIME_KEY);
    console.log(JSON.stringify(time));
    setUsageTime(time);
  }, []);

  useEffect(() => {
    localStorage.setItem(USER_USAGE_TIME_KEY, usageTime);
  }, [usageTime]);

  const handleKeyPress = (value) => {
    setUsageTime(value);
  };

  return (
    <>
      <Header />

      <div className="title mt-8 ml-8 text-xl text-white">MY ACCOUNT</div>

      <div className="form">
        <span className="label text-l mt-8 ml-8 text-white">
          DAILY WATCH TIME LIMIT
        </span>

        <div className="ml-4 flex items-center rounded bg-gray-50 py-[1px] px-2 sm:ml-6">
          <input
            className="w-44 bg-transparent p-1 text-sm text-black placeholder-gray-400 outline-none"
            placeholder="Time in minutes"
            value={usageTime}
            onKeyPress={handleKeyPress}
          ></input>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
