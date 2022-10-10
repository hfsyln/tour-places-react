import Header from "./components/Header" ;
import Card from "./components/Card";
import data from "./data";

function App() {
  return (
    <div className="kapsayıcı">
      <Header/>
      <div className="data">
        {data.map((item) => (
          <Card
          key = {item.id}
          item = {item} />
        ))}
      </div>
    </div>
  );
}

export default App;
