const Button = (props) => {
  const { title, type , handleClick, className} = props;
 
  return (
    <button
      type={type}
      className={className}
      onClick={handleClick}
    >
      <p className="text-white text-[12px] font-bold text-center">{title}</p>
    </button>
  );
};

export default Button;
