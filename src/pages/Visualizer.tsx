import { useState, ChangeEvent, useEffect, useRef } from "react";
import StateMachine from "@/components/svg-machine";

const Visualizer = () => {
  const [input, setInput] = useState<string>("");
  const [status, setStatus] = useState<
    Record<number, "pending" | "accepted" | "wrong">
  >({});
  const [isDeadState, setIsDeadState] = useState<boolean>(false);
  const [wrongLineIndex, setWrongLineIndex] = useState<number>(-1);
  const pattern = "xxx.xxx.xxx.xxx";

  const previousInput = useRef("");
  const previousDsStatus = useRef(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setInput(value);

    const newStatus: typeof status = {};
    let dead = false;

    for (let i = 0; i < pattern.length; i++) {
      const expectedChar = pattern[i];
      const currentChar = value[i];

      // If input is longer than 15, mark everything as wrong and set dead state
      if (value.length > 15) {
        setWrongLineIndex(15)
        for (let i = 0; i < value.length; i++) {
          newStatus[i] = "wrong";
        }
        setStatus(newStatus);
        setIsDeadState(true);
        previousInput.current = value;
        previousDsStatus.current = true;
        return;
      }

      if (dead) {
        newStatus[i] = "wrong";
        continue;
      }

      if (!currentChar) {
        newStatus[i] = "pending";
        continue;
      }

      if (expectedChar === "x") {
        const checkChar = /\d/.test(currentChar) ? "accepted" : "wrong";
        if (checkChar === "wrong") {
          dead = true;
          setWrongLineIndex(i);
        }
        newStatus[i] = checkChar;
      } else if (expectedChar === ".") {
        const checkChar = currentChar === "." ? "accepted" : "wrong";
        if (checkChar === "wrong") {
          dead = true;
          setWrongLineIndex(i)
        }
        newStatus[i] = checkChar;
      }
    }

    setStatus(newStatus);
    setIsDeadState(dead);

    // Store current values for future reference
    previousInput.current = value;
    previousDsStatus.current = dead;
  };

  // Log status whenever it updates
  useEffect(() => {
    console.log(wrongLineIndex);
  }, [wrongLineIndex]);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        className="border p-2 rounded-md w-[400px] mb-4"
        placeholder="Enter xxx.xxx.xxx.xxx"
      />

      {/*THIS IS FOR THE SVG*/}
      <div>
        <StateMachine status={status} isDeadState={isDeadState} wrongLineIndex={wrongLineIndex}/>
      </div>
    </div>
  );
};

export default Visualizer;
