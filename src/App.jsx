import { Router } from "./router/Router";
import "./styles.css";
import { UserProvider } from "./providers/UserProvider";

export const App = () => {
  return (
      <UserProvider>
        <Router />
      </UserProvider>
  );
};
