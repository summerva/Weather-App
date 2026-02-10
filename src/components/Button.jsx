const Button = (props) => {
  const {
    children,
    onClick
  } = props;

  return (
    <button className="button" type="submit" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
