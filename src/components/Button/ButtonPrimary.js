export const ButtonPrimary = ({ text, otherClasses, onClickHandler }) => {
  return (
    <button
      className={`rounded-md p-3 bg-primary text-white ${otherClasses}`}
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};
