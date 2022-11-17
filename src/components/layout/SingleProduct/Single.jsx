import "./Single.scss";
import { useParams } from "react-router-dom";
import Container from "../../../container/Container";

const Single = () => {
  const { id } = useParams();

  return (
    <Container>
      <section className="single">
        <div className="single-container container">single {id}</div>
      </section>
    </Container>
  );
};

export default Single;
