import { ExampleHeroes } from "./hero/heroes";
import {
  HeroExampleOne,
  HeroExampleTwo,
  HeroExampleThree,
} from "./heroes/examples/example-heros";

const Home = () => {
  return (
    <div className="relative flex">
      <ExampleHeroes />
    </div>
  );
};

export default Home;

// const Home = () => {
//   return (
//     <div className="relative flex">
//       <Hero color="#FFE2B5">
//         <ExampleHeroContent1 />
//       </Hero>
//     </div>
//   );
// };
