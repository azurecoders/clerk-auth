"use server";

import { connect } from "@/db";
import User from "@/modals/user.modal";

export async function CreateUser(user: any) {
  try {
    await connect();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.error(error);
  }
}
