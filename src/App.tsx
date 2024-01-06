import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ProfileGrid from "./components/ProfileGrid";

function App() {
  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "main main"`
  }}>
    <GridItem area="nav">
      <NavBar />
    </GridItem>
    <GridItem area="main">
      <ProfileGrid />
      </GridItem>
  </Grid>
};

export default App;