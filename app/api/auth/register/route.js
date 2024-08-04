import User from "@models/User";
import { ConnectToDB } from "@mongodb";
import { hash } from "bcryptjs";

export const POST = async (req) => {
  try {
    await ConnectToDB();
    const body = await req.json();
    const { username, email, password } = body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response("Email is already exist", {
        status: 400,
      });
    }

    const hashPassword = await hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashPassword,
    });

    await newUser.save();
    return new Response(JSON.stringify(newUser), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create a new user", {
      status: 500,
    });
  }
};
