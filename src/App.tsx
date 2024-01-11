import { Grid, GridItem, Switch } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ProfileGrid from "./components/ProfileGrid";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
  <Router>
  <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "main main"`
  }}>
    <GridItem area="nav">
      <NavBar />
    </GridItem>
    <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem area="main">
          <Switch>
            <Route path="/profile/:userID" Component={ProfileGrid} />
          </Switch>
        </GridItem>
  </Grid>
  </Router>)
};

export default App;