import "./Button.css";

const Button = (props) => {
  return (
    <button className="button-try" {...props}>
      {props.children}
    </button>
  );
};

export default Button;
