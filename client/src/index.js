import ReactDOM from "react-dom";
import App from "./components/App";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./components/context/UserContext";
import { AstroProvider } from "./components/context/AstroContext";

ReactDOM.render(
  <Auth0Provider
    domain= {process.env.REACT_APP_AUTH0_ID}
    clientId=""
    redirectUri={window.location.origin}>
      <UserProvider>
        <AstroProvider>
          <App />
        </AstroProvider>  
      </UserProvider>
    </Auth0Provider>,
  document.getElementById('root')
);
