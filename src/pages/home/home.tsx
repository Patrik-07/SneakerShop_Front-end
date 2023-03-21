import { ExampleHero } from "./hero/heroes";
import {
  HeroExampleOne,
  HeroExampleTwo,
  HeroExampleThree,
} from "./heroes/examples/example-heros";

const Home = () => {
  return (
    <div className="h-fit">
      <ExampleHero />
    </div>
  );
};

export default Home;
