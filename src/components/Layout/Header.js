import { Fragment } from "react";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>PRODUCTS</h1>
        <HeaderCartButton onClick={props.onShow}></HeaderCartButton>
      </header>
      <div className={classes.div}></div>
    </Fragment>
  );
};

export default Header;
