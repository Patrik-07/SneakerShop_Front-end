import { ExampleHomeContent } from "./example/example-home-content";

type HomeContentInputProps = {
  children: React.ReactNode;
};

const HomeContent = ({ children }: HomeContentInputProps) => {
  return <div className="flex flex-col">{children}</div>;
};

const Home = () => {
  return (
    <HomeContent>
      <ExampleHomeContent />
    </HomeContent>
  );
};

const asd = 5;

export default Home;
