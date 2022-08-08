import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: JSON.parse(localStorage.getItem("userData"))?._id ?? uuid(), //only for default login, check id alrady id created and stored in local storage. If so, use that or create new id. This is to prevent having mismatch of id for same user in database and authStatus which comes from local storage
    firstName: "Omkar",
    lastName: "Jadhav",
    username: "omkarjadhav",
    password: "abc123",
    image: "https://avatars.dicebear.com/api/adventurer/oj.svg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Otaku | Naruto Fan | Love coding and solving problems",
    portfolioUrl: "https://omkarjadhav.netlify.com",
  },
  {
    _id: uuid(),
    firstName: "Charu",
    lastName: "Bangal",
    username: "charubangal",
    password: "charu123",
    image: "https://avatars.dicebear.com/api/adventurer/cb.svg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Hello! I am Charu. Nice to meet you!",
    portfolioUrl: "https://charu.netlify.com",
  },
  {
    _id: uuid(),
    firstName: "Rohan",
    lastName: "Bordekar",
    username: "rohanbordekar",
    password: "rohan123",
    image: "https://avatars.dicebear.com/api/adventurer/rb.svg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Hello! I am Rohan. Nice to meet you!",
    portfolioUrl: "https://rohan.netlify.com",
  },
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarsh123",
    image: "https://avatars.dicebear.com/api/adventurer/ab.svg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Hello! I am Adarsh. Nice to meet you!",
    portfolioUrl: "https://adarshbalika.netlify.com",
  },
  {
    _id: uuid(),
    firstName: "Shubham",
    lastName: "Soni",
    username: "shubhamsoni",
    password: "shubham123",
    image: "https://avatars.dicebear.com/api/adventurer/ss.svg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Hello! I am Shubham. Nice to meet you!",
    portfolioUrl: "https://shubham.netlify.com",
  },
  {
    _id: uuid(),
    firstName: "Soham",
    lastName: "Shah",
    username: "sohamshah",
    password: "soham123",
    image: "https://avatars.dicebear.com/api/adventurer/ss2.svg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Hello! I am Soham. Nice to meet you!",
    portfolioUrl: "https://soham.netlify.com",
  },
];
