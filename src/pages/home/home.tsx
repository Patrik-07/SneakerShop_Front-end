import { ExampleHomeContent } from "./example/example-home-content";

type HomeContentInputProps = {
  children: React.ReactNode;
};

const HomeContent = ({ children }: HomeContentInputProps) => {
  return <div className="flex flex-col pt-2">{children}</div>;
};

const Home = () => {
  return (
    <HomeContent>
      <ExampleHomeContent />
    </HomeContent>
  );
};

export default Home;
