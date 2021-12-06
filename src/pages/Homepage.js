import { useContext } from "react";

// Context
import ShowsContext from "../context/shows/showsContext";

// Components
import Searchbar from "../components/Searchbar";
import ListItem from "../components/ListItem";
import Loader from "../components/Loader";
import { Row } from 'react-bootstrap';

const Homepage = () => {
  const showsContext = useContext(ShowsContext);
  console.log(showsContext);
  const { loading, shows } = showsContext;

  return (
    <div className="homepage">
      <Searchbar />
      {loading ? (
        <Loader />
      ) : (
        <Row xs={1} md={3} className="g-4 my-4 mx-5">
          {shows.slice(0,9).map((item) => (
            <ListItem
              key={item.show.id}
              id={item.show.id}
              image={
                item.show.image
                  ? item.show.image.medium
                  : "https://image.freepik.com/free-vector/traffic-sign-page-404-found-flat-illustration_80328-232.jpg"
              }
              name={item.show.name}
              rating={
                item.show.rating.average
                  ? item.show.rating.average
                  : "No rating"
              }
            />
          ))}
        </Row>
      )}
    </div>
  );
};

export default Homepage;
