import Card from "./components/Card";
import Button from "./components/Button";
import List from "./components/List";
import ListItem from "./components/ListItem";
import './App.css';

function App() {
  return (
    <div className="App">
      <Card>
        <List>
          <ListItem>
            <Button></Button>
          </ListItem>
        </List>
      </Card>
    </div>
  );
}

export default App;
