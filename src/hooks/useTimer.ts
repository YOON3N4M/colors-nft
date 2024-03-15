import { calculateRemainingTime, calculateTimeDiffer } from "@/utils";
import { useEffect, useState } from "react";

/**
 *  첫번째 인자는 기준 시간 (unix)
 *
 *  두번째 인자는 기준 시간 이후 타겟으로 할 시간 ex) 30분 후는 인자로 30 을 입력
 *
 *  return 값은 목표 시간까지 남은 시간의 초 단위
 */
export default function useTimer(
  unixTime: number,
  targetTimeDifferMin: number
) {
  const [baseUnixTime, setBaseUnixTime] = useState(unixTime);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const initialTime = calculateRemainingTime(
      baseUnixTime,
      targetTimeDifferMin
    );
    setSecond(initialTime);
  }, []);

  useEffect(() => {
    setSecond(calculateRemainingTime(baseUnixTime, targetTimeDifferMin));
  }, [baseUnixTime]);

  useEffect(() => {
    const secondInterval = setInterval(() => {
      setSecond((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(secondInterval);
  }, []);

  return { second, setBaseUnixTime };
}
