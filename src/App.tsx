import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "styles/GlobalStyle";
import { AuthProvider } from "hooks/auth";
import Routes from "router";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
