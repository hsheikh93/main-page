import { Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Home from "./Home";
import Resume from "./Resume";
import Projects from "./Projects";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: "100vw",
    padding: "1em",
  },
});

const Page = () => {
  const classes = useStyles();
  return (
    <Paper square className={classes.root}>
      <Divider variant="middle" />
      <Switch>
        <Route path="/main-page">
          <Home />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </Paper>
  );
};

export default Page;
