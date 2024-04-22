const Button = (props) => {
  return (
    <button
      style={{ backgroundColor: "red", borderRadius: "40 px" }}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
