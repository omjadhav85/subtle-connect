import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  ButtonPrimary,
  ButtonSecondary,
  CircleAvatar,
  Post,
  PostModal,
} from "../../components";
import { getUserDetailService } from "../../utils/serverCalls/userCalls";
import { EditProfile } from "./EditProfile";
import { followUser, unfollowUser } from "./usersSlice";

export const Profile = () => {
  const { profileId } = useParams();
  const { userData, token } = useSelector((state) => state.auth);
  const { allPosts } = useSelector((state) => state.posts);

  const [profileDetails, setProfileDetails] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [oldPost, setOldPost] = useState({});

  const dispatch = useDispatch();

  const {
    username = "",
    firstName = "",
    lastName = "",
    image = "",
    following = [],
    followers = [],
    bio = "",
    portfolioUrl = "",
  } = profileDetails;

  const userPosts = allPosts.filter((post) => post.username === username);
  const isOwnProfile = profileId === userData._id;
  let isAlreadyFollowed = false;
  if (!isOwnProfile) {
    isAlreadyFollowed = userData.following.some(
      (user) => user._id === profileId
    );
  }

  useEffect(() => {
    const getProfileDetails = async (profileId) => {
      try {
        const res = await getUserDetailService(profileId);
        setProfileDetails(res.data.user);
      } catch (err) {
        console.log("error while fetching user data: ", err);
      }
    };

    if (isOwnProfile) {
      setProfileDetails(userData);
    } else {
      getProfileDetails(profileId);
    }
  }, [userData, profileId]);

  return (
    <div className="flex-1 flex flex-col mt-4 gap-4">
      <section className="flex flex-col items-center gap-2 bg-white rounded-md py-4">
        <CircleAvatar
          imgSrc={image}
          otherClasses="w-32 h-32 border border-primary"
        />
        <h1 className="text-xl font-bold">{`${firstName} ${lastName}`}</h1>
        <p>{`@${username}`}</p>
        {isOwnProfile ? (
          <ButtonSecondary
            text="Edit Profile"
            onClickHandler={() => setShowEditProfile(true)}
          />
        ) : isAlreadyFollowed ? (
          <ButtonSecondary
            text="Unfollow"
            onClickHandler={() =>
              dispatch(unfollowUser({ userToUnfollow: profileDetails, token }))
            }
          />
        ) : (
          <ButtonPrimary
            text="Follow"
            onClickHandler={() =>
              dispatch(followUser({ userToFollow: profileDetails, token }))
            }
          />
        )}
        <p>{bio}</p>
        <a href={portfolioUrl} target="_blank">
          {portfolioUrl}
        </a>

        <div className="flex p-4 gap-8">
          <div className="flex-1 flex flex-col items-center">
            <h1 className="text-xl font-bold">{following.length}</h1>
            <p className="text-xl">Following</p>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <h1 className="text-xl font-bold">{userPosts.length}</h1>
            <p className="text-xl">Posts</p>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <h1 className="text-xl font-bold">{followers.length}</h1>
            <p className="text-xl">Followers</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h1 className="font-bold">Recent Posts</h1>
        {userPosts.map((post) => (
          <Post
            post={post}
            key={post._id}
            setShowModal={setShowModal}
            setOldPost={setOldPost}
          />
        ))}
      </section>
      {showModal && (
        <PostModal
          oldPost={oldPost}
          setOldPost={setOldPost}
          setShowModal={setShowModal}
        />
      )}

      {showEditProfile && (
        <EditProfile setShowEditProfile={setShowEditProfile} />
      )}
    </div>
  );
};
