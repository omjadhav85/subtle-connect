export const ButtonSecondary = ({ text, otherClasses, onClickHandler }) => {
  return (
    <button
      className={`rounded-md p-3 border border-primary ${otherClasses}`}
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};
