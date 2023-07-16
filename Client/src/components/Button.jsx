const Button = (props) => {
  const { title, type, handleClick, className, disabled } = props;

  return (
    <button
      type={type}
      className={className}
      onClick={handleClick}
      disabled={disabled}
    >
      <p className="text-[12px] font-bold text-center">{title}</p>
    </button>
  );
};

export default Button;
