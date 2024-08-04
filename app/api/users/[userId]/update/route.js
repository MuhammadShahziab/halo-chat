import User from "@models/User";
import { ConnectToDB } from "@mongodb";

export const POST = async (req, { params }) => {
  try {
    await ConnectToDB();
    const body = await req.json();
    const { profileImage, username, phone, about } = body;
    const { userId } = params;

    const updateUser = await User.findByIdAndUpdate(
      userId,
      {
        username,
        profileImage,
        phone,
        about,
      },
      { new: true }
    );

    return new Response(JSON.stringify(updateUser), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to update user", { status: 500 });
  }
};
