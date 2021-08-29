import Page from "../../../CommonComponents/Page/Page";

const Component = () => {
  return (
    <iframe
      src={
        "https://docs.google.com/document/d/1pI4I-izXI7xGRG2K7LW2CICN49vyMxsyPo6qUhpvyZo?usp=sharing&embedded=true"
      }
      title="file"
      width="100%"
      height="600"
    ></iframe>
  );
};

const Resume = () => {
  const ResumePage = Page(Component);
  return <ResumePage heading={"Resume"} />;
};

export default Resume;
