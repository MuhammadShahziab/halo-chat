// import User from "@models/User";
// import { ConnectToDB } from "@mongodb";

// export const GET = async (req, { params }) => {
//   try {
//     await ConnectToDB();
//     const { userId } = params;
//     const user = await User.findById(userId);
//     return new Response(JSON.stringify(user), { status: 200 });
//   } catch (error) {
//     return new Response("failed to get user profile");
//   }
// };
