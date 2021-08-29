import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";
import DescriptionIcon from "@material-ui/icons/Description";
import AppsIcon from "@material-ui/icons/Apps";
import "./Header.css";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: "100vw",
  },
  indicator: {
    backgroundColor: "black",
  },
});

const LinkedTab = (props) => {
  return (
    <Link to={props.link} className="link">
      <Tab {...props} />
    </Link>
  );
};

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        aria-label="icon label tabs example"
        classes={{
          indicator: classes.indicator,
        }}
      >
        <LinkedTab link={"/main-page"} label={"Home"} icon={<HomeIcon />} />
        <LinkedTab
          link={"/resume"}
          label={"Resume"}
          icon={<DescriptionIcon />}
        />
        <LinkedTab link={"/projects"} label={"Projects"} icon={<AppsIcon />} />
      </Tabs>
    </Paper>
  );
};

export default Header;
