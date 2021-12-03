const { useRouter } = require('next/router');

function Button({ children, className, text, eventHandler, to }) {
  const router = useRouter();
  const switchRoute = () => router.push(`/${to}`);

  return (
    <button
      className={className}
      onClick={to ? switchRoute : eventHandler}
      type='button'
    >
      {children && text && text} {children || text}
    </button>
  );
}

export default Button;
