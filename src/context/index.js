import { createContext } from "react";

export const MainContext = createContext({
  loaderExit: false,
  setLoaderExit: () => {},
});
