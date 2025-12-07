import Header from "./components/Header";
import CounterBox from "./components/CounterBox";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-area">
        <CounterBox />
      </main>
    </div>
  );
}

export default App;
