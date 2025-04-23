import animalGroups from "./components/AnimalGroups";
import List from "./components/List";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <List data={animalGroups} />
    </div>
  );
};

export default App
