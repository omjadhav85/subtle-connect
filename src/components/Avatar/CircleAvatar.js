export const CircleAvatar = ({ imgSrc, otherClasses }) => {
  return (
    <div className={`rounded-full w-16 h-16 overflow-hidden ${otherClasses}`}>
      <img src={imgSrc} alt="" className="bg-cover" />
    </div>
  );
};
