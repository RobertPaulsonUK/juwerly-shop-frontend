import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig: NextAuthConfig = {
    providers: [
        Credentials({
            credentials: {
                email: { label: "Email", required: true, type: "email"},
                password: { label: "Password", type: "password", required: true },
            },
            async authorize(credentials) {
                const res = await fetch(`${process.env.BACKEND_URL}/api/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password,
                    }),
                });

                const resData = await res.json();

                if (resData.success && resData.token && resData.user) {
                    return {
                        id: resData.user.id,
                        name: resData.user.name,
                        email: resData.user.email,
                        token: resData.token,
                        role: resData.user.role,
                    };
                }

                throw new Error(resData.message || "Login failed");
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
                token.token = user.token;
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id;
                session.user.token = token.token;
                session.user.role = token.role;
            }
            return session;
        },
    },
    pages: {
        signIn: "/login",
    },
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: "jwt",
    },
};
