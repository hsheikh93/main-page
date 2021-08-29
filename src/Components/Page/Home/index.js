import Page from "../../../CommonComponents/Page/Page";

const Component = () => {
  return <div></div>;
};

const Home = () => {
  const HomePage = Page(Component);
  return <HomePage heading={"Home"} />;
};

export default Home;
