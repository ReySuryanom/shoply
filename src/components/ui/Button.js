function Button({ children, className, text, eventHandler }) {
  return (
    <button className={className} onClick={eventHandler}>
      {children && text && text} {children || text}
    </button>
  );
}

export default Button;
