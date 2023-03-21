import { Cards } from "./cards/cards";
import { ExampleHero } from "./hero/heroes";

const Home = () => {
  return (
    <div className="flex flex-col h-fit">
      <ExampleHero />
      <Cards />
    </div>
  );
};

export default Home;
