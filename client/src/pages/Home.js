import SearchBar from "../components/SearchBar";
import Grid from "@material-ui/core/Grid";
import HomeCard from "../components/HomeCard";
import HomeCardArr from "../HomeArticle";
import Container from "@material-ui/core/Container";
import IncidentsTicker from "../components/IncidentsTicker";
import CoeInfo from "../components/CoeInfo";

const Home = ({ handleSubmit, handleChange, query }) => {
  return (
    <div className="home">
      <CoeInfo />
      <div className="search_home">
        <SearchBar
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          query={query}
        />
      </div>

      <IncidentsTicker />
      <article>
        <Container>
          <Grid container direction="row" justify="space-around">
            {HomeCardArr.map((element, index) => (
              <Grid item xs={12} md={6} key={index}>
                <HomeCard element={element} key={index} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </article>
    </div>
  );
};

export default Home;
