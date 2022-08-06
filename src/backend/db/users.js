import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Omkar",
    lastName: "Jadhav",
    username: "omkarjadhav",
    password: "abc123",
    image: "https://avatars.dicebear.com/api/adventurer/oj.svg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
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
  },
];
