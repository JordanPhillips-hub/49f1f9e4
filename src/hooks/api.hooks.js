import { useContext } from "react";
import { CallContext } from "../providers/CallProvider";

export const useCallContext = () => useContext(CallContext);
