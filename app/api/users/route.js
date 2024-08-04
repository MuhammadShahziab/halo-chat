import User from "@models/User";
import { ConnectToDB } from "@mongodb";

export const GET = async () => {
  try {
    await ConnectToDB();

    const users = await User.find({});
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to get users");
  }
};
