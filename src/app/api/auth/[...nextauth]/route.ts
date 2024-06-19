import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"

const options = {
    providers: [
        GoogleProvider({
            clientId:'',
            clientSecret:''
        })
    ],
    callbacks: {
        async signIn({user, account}) {
            console.log("user : ",user)
            return user
        }
    }
}

const handler = NextAuth(options)
export { handler as GET, handler as POST}
