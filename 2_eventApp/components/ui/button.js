import Link from "next/link";
import classes from "./button.module.css";

const Button = ({ link, children, onClick }) => {
  if (link) {
    return (
      <Link href={link}>
        <a className={classes.btn}>{children}</a>
      </Link>
    );
  }

  //링크가 없을 때
  return (
    <button className={classes.btn} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
