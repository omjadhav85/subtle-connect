import React, { useState } from "react";

export const CircleAvatar = ({
  imgSrc,
  firstName,
  lastName,
  otherClasses = "",
  onClickHandler,
}) => {
  const [imgError, setImgError] = useState(false);
  const initials = `${firstName?.[0] || ""}${
    lastName?.[0] || ""
  }`.toUpperCase();
  const showInitials = !imgSrc || imgError;

  return (
    <div
      className={`w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-blue-600 text-white font-semibold text-lg cursor-pointer ${otherClasses}`}
      onClick={onClickHandler}
    >
      {showInitials ? (
        <span>{initials}</span>
      ) : (
        <img
          src={imgSrc}
          alt={`${firstName} ${lastName}`}
          className="w-full h-full object-cover"
          onError={() => setImgError(true)}
        />
      )}
    </div>
  );
};
