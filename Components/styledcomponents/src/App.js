import './App.css';
import styled from 'styled-components';
import { Buttons, TheSearchBar } from "./styles/elements";
import searchIcon  from "./svg/search.png";

const Container = styled.div`
  width: 1280px;
  min-width: 1280px;
  margin: 0 auto;
  background: blue;
  .row{
    width: 100%;
    display: flex;
    align-center: center;
  }
`

//I am going to create a subhead component: button and search
const SubHead = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin: 160px 0 48px;
`;


function App() {
  return (
    <div className="App">
      <Container>
            <SubHead>Buttons</SubHead>
            <div className="row">
              <Buttons>Polanco32</Buttons>
              <Buttons primary>27429</Buttons>
              <Buttons primary>3532</Buttons>
              <Buttons primary>37532</Buttons>
            </div>
            <SubHead>Search Bar</SubHead>
            <div className="row">
              <TheSearchBar>
                <img src={searchIcon} alt="Search Icon" width="4px" height="4px"/>
                <input placeholder="Search for your favorite class or prof" type="text"/>
              </TheSearchBar>
            </div>
      </Container>
    </div>
  );
}

export default App;
