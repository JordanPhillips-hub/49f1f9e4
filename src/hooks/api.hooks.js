import { useContext } from "react";
import { CallContext } from "../providers/CallProvider";
import { NavigationContext } from "../providers/NavigationProvider";

export const useCallContext = () => useContext(CallContext);
export const useNavigationContext = () => useContext(NavigationContext);
