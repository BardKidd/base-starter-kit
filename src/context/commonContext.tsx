import { createContext, useState } from "react";

type ContextProps = {
  children?: React.ReactNode;
};

export const InitContext = createContext({});

const CommonContext = ({ children }: ContextProps) => {
  const [count, setCount] = useState(0);
  const initContext = {
    sayHello: "WTF?",
    count,
    incrementCount: () => {
      setCount(count + 1);
    }

  };
  return (
    <InitContext.Provider value={initContext}>{children}</InitContext.Provider>
  );
};

export default CommonContext;
