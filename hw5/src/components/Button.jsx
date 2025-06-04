const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="task-button">
      {children}
    </button>
  );
};

export default Button;
