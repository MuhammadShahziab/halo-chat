import User from "@models/User";
import { ConnectToDB } from "@mongodb";

export const GET = async (req, { params }) => {
  try {
    await ConnectToDB();
    const { query } = params;
    console.log(query, "check query ");
    const searchContacts = await User.find({
      $or: [
        {
          username: { $regex: query, $options: "i" },
        },
        {
          email: { $regex: query, $options: "i" },
        },
      ],
    });

    return new Response(JSON.stringify(searchContacts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to search contact", { status: 500 });
  }
};
