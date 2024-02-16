import { MongoDBAdapter } from "@auth/mongodb-adapter"
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import db from "./db"
export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    adapter: MongoDBAdapter(db, {
        databaseName: "leftover",
    }),
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET
        })
    ]
})