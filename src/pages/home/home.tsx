import { HeroExampleOne } from "./heroes/examples/example-hero-one";
import { HeroExampleThree } from "./heroes/examples/example-hero-three";
import { HeroExampleTwo } from "./heroes/examples/example-hero-two";

const Home = () => {
  return (
    <div className="relative flex">
      <HeroExampleTwo />
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
