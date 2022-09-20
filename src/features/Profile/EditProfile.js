import { useState } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { ButtonPrimary, CircleAvatar, Input } from "../../components";
import axios from "axios";
import { updateUser } from "../Authentication/authSlice";

export const EditProfile = ({ setShowEditProfile }) => {
  const { userData, token } = useSelector((state) => state.auth);
  const [editDetails, setEditDetails] = useState(userData);
  const dispatch = useDispatch();

  const handleImageChange = async (e) => {
    try {
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      formData.append("upload_preset", "onwdmswc");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/omjcloud/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      setEditDetails({ ...editDetails, image: data.url });
    } catch (err) {
      console.log(err);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ userData: editDetails, token }));
    setShowEditProfile(false);
  };

  return (
    <div className="fixed top-0 left-0 bg-slate-400 h-full w-full bg-black/50 z-10">
      <main className="absolute top-1/2 left-1/2 bg-white z-20 -translate-x-1/2 -translate-y-1/2 w-1/3 rounded-md p-4">
        <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
          <div className="flex items-center gap-2">
            <MdClose
              size={25}
              onClick={() => setShowEditProfile(false)}
              className="cursor-pointer"
            />
            <h1 className="flex-1 text-xl font-bold">Edit Profile</h1>
            <ButtonPrimary text="Save" />
          </div>
          <div className="flex justify-center relative">
            <CircleAvatar
              imgSrc={editDetails.image}
              otherClasses="w-32 h-32 border border-primary cursor-pointer"
            />
            <input
              type="file"
              accept="image/*"
              className="opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              onChange={handleImageChange}
            />
          </div>
          <div>
            <label htmlFor="">First Name</label>
            <Input
              type="text"
              value={editDetails.firstName}
              onChangeHandler={(e) =>
                setEditDetails({ ...editDetails, firstName: e.target.value })
              }
              placeholder="First Name"
              isRequired={true}
            />
          </div>

          <div>
            <label htmlFor="">Last Name</label>
            <Input
              type="text"
              value={editDetails.lastName}
              onChangeHandler={(e) =>
                setEditDetails({ ...editDetails, lastName: e.target.value })
              }
              placeholder="Last Name"
              isRequired={true}
            />
          </div>
          <div>
            <label htmlFor="">Bio</label>
            <Input
              type="text"
              value={editDetails.bio}
              onChangeHandler={(e) =>
                setEditDetails({ ...editDetails, bio: e.target.value })
              }
              placeholder="Bio"
              isRequired={true}
            />
          </div>
          <div>
            <label htmlFor="">Portfolio Url</label>
            <Input
              type="text"
              value={editDetails.portfolioUrl}
              onChangeHandler={(e) =>
                setEditDetails({ ...editDetails, portfolioUrl: e.target.value })
              }
              placeholder="Portfolio Url"
              isRequired={true}
            />
          </div>
        </form>
      </main>
    </div>
  );
};
