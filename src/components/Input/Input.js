export const Input = ({
  type,
  value,
  onChangeHandler,
  placeholder,
  isRequired,
  leftIcon,
  onLeftIconClick,
  rightIcon,
  onRightIconClick,
  otherClasses,
}) => {
  return (
    <div
      className={`flex gap-2 border p-2 mt-2 rounded-md items-center focus-within:ring-1 focus-within:ring-primary ${otherClasses}`}
    >
      {leftIcon && (
        <i onClick={onLeftIconClick} className="hover:cursor-pointer">
          {leftIcon}
        </i>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChangeHandler(e)}
        placeholder={placeholder}
        className="flex-1 focus:outline-none w-full"
        required={isRequired}
      />
      {rightIcon && (
        <i onClick={onRightIconClick} className="hover:cursor-pointer">
          {rightIcon}
        </i>
      )}
    </div>
  );
};
