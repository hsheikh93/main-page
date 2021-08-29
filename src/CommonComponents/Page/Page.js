import "./Page.css";

const Page = (Component) => {
  return ({ heading }) => {
    return (
      <div>
        <div className="heading-container">
          <h1 className="heading">{heading}</h1>
        </div>
        <Component />
      </div>
    );
  };
};

export default Page;
