import Chat from "@models/Chat";
import Message from "@models/Message";
import User from "@models/User";
import { ConnectToDB } from "@mongodb";

export const GET = async (req, { params }) => {
  try {
    await ConnectToDB();
    const { userId, query } = params;

    const searchChats = await Chat.find({
      members: userId,
      name: { $regex: query, $options: "i" },
    })
      .populate({
        path: "members",
        model: User,
      })
      .populate({
        path: "messages",
        model: Message,
        populate: {
          path: "sender seenBy",
          model: User,
        },
      })
      .exec();

    return new Response(JSON.stringify(searchChats), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("failed to get search chats");
  }
};
