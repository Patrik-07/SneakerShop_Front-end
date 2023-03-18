import { Hero } from "./hero/hero";
import { ExampleHeroContent1 } from "./hero-contens/example-hero-content1";

const Home = () => {
  return (
    <div className="relative flex">
      <Hero>
        <ExampleHeroContent1 />
      </Hero>
    </div>
  );
};

export default Home;
