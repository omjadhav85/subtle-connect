export const Input = ({
  type,
  value,
  onChangeHandler,
  placeholder,
  isRequired,
}) => {
  return (
    <div className="flex gap-2 border p-2 mt-2 rounded-md items-center focus-within:ring-1 focus-within:ring-primary ">
      <input
        type={type}
        value={value}
        onChange={(e) => onChangeHandler(e)}
        placeholder={placeholder}
        className="flex-1 focus:outline-none"
        required={isRequired}
      />
    </div>
  );
};
