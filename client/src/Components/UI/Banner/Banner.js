import classes from "./Banner.module.css";

const Banner = (props) => {
  return <div className={`${classes.banner} ${props.className}`} id={props.id} onClick={props.onClick}>
    {props.children}
  </div>
};

export default Banner;
