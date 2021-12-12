function InputForm({ children, callback, name, value, type = 'text' }) {
  const eventHandler = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    callback((userInput) => {
      return { ...userInput, [key]: value };
    });
  };

  return (
    <div className='relative'>
      <input
        className='absolute w-full px-10 py-2.5 bg-[#F5F7FB] rounded-full lg:py-3.5 capitalize'
        name={name}
        placeholder={name}
        type={type}
        value={value[name]}
        onChange={eventHandler}
      />
      {children}
    </div>
  );
}

export default InputForm;
