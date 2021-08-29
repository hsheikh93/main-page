import { makeStyles } from "@material-ui/core/styles";
import Page from "../../../CommonComponents/Page/Page";
import Divider from "@material-ui/core/Divider";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import image from "./profile-picture.jpg";
import "./Home.css";

const useStyles = makeStyles({
  row: {
    borderStyle: "hidden",
  },
  cell: {
    width: "100px",
  },
  divider: {
    margin: "3em 0",
  },
});

function createData(name, info) {
  return { name, info };
}

const rows = [
  createData("Name: ", "Muhammad Sheikh"),
  createData("Role: ", "Full-Stack Developer"),
  createData("Strong: ", "JavaScript (ES6), Node,  React, Redux, Express, NoSQL"),
  createData("Experienced: ", "WebSockets, Webpack, TDD (Mocha, Chai, Enzyme), Stripe, Payment gateways, Git, Jenkins, AWS (Chime, ElastiCache,  Dynamodb, EC2, CloudWatch, CloudFormation, Lambda, S3, IAM), Twilio"),
];

const Component = () => {
  const classes = useStyles();
  return (
    <div id="home-container">
      <div id="profile-container">
        <div id="profile-picture-container">
          <img src={image} id="profile-picture" alt="profile" />
        </div>
        <Divider orientation="vertical" flexItem />
        <div id="bio-container">
          <div id="bio-container-heading">
            <h2 id="bio-heading">About Me</h2>
          </div>
          <div id="bio-container-description">
            <p>
              Hello my name is Muhammad Sheikh. You know I live by the motto
              that as developer you always want to improve upon your knowledge.
              That's why I never say I am an expert, instead I am a developer
              looking to improve
            </p>
          </div>
        </div>
      </div>
      <Divider className={classes.divider} variant="middle" />
      <div>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>
              {rows.map((row) => (
                <TableRow className={classes.row} key={row.name}>
                  <TableCell
                    className={classes.cell}
                    component="th"
                    scope="row"
                  >
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.info}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

const Home = () => {
  const HomePage = Page(Component);
  return <HomePage heading={"Home"} />;
};

export default Home;
