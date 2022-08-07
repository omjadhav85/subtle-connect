export const CircleAvatar = ({ imgSrc, otherClasses, onClickHandler }) => {
  return (
    <div
      className={`rounded-full w-16 h-16 overflow-hidden ${otherClasses}`}
      onClick={onClickHandler}
    >
      <img src={imgSrc} alt="" className="bg-cover" />
    </div>
  );
};
