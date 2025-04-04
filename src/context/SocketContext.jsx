import { createContext, useEffect, useState, useContext } from "react";
import {io} from "socket.io-client"

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null)

  useEffect(() => {
      setSocket(io("http://localhost:4000"))
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};