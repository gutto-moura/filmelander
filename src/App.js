import Router from "./routes";
import GlobalStyle from "./pages/styles/global";
import Header from "./components/Headers";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Router />
    </div>
  );
}

export default App;
