import classes from "./Banner.module.css";

const Banner = (props) => {
  return <div className={`${classes.banner} ${props.className}`}>
    {props.children}
  </div>
};

export default Banner;
