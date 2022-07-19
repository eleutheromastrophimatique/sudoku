/** @jsxImportSource @emotion/react */
import { jsx, ThemeProvider } from "@emotion/react";
import { Grid, Card, Title, Button, Game } from "./components";
import { Content } from "./components/styles/content";

function App() {
  function onClick(indexOfArray: number) {
    console.log("cell index", indexOfArray);
  }

  return (
    <Content>
      <Card>
        <Title>Sudoku</Title>
        <Game />
      </Card>
    </Content>
  );
}

export default App;
