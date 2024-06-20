import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import User from "@/models/User";
import connectToMongoose from "@/lib/connectTo Db";

const options = {
    providers: [
        GoogleProvider({
            clientId:'',
            clientSecret:''
        })
    ],
    callbacks: {
        async signIn({user, account}) {
            const {name, email} = user
            await connectToMongoose()
            const userExists = await User.findOne({email})
            if (!userExists) {
                const res = await User.create({email, name})
                if (res.ok) {
                    return user
                }
            }
            return user
        }
    }
}

const handler = NextAuth(options)
export { handler as GET, handler as POST}
