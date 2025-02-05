import NextAuth from "next-auth"
import {authConfig} from "@/configs/auth";

const { handlers, signIn, signOut, auth } = NextAuth(authConfig)
export const { GET, POST } = handlers