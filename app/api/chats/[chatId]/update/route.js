import Chat from "@models/Chat";
import { ConnectToDB } from "@mongodb";

export const POST = async (req, { params }) => {
  try {
    await ConnectToDB();
    const body = await req.json();
    const { groupname, groupPhoto } = body;
    const { chatId } = params;

    const updateGroupChat = await Chat.findByIdAndUpdate(
      chatId,
      {
        groupPhoto,
        name: groupname,
      },
      { new: true }
    );

    return new Response(JSON.stringify(updateGroupChat), { status: 200 });
  } catch (error) {
    console.log(error);
    return Response("failed");
  }
};
