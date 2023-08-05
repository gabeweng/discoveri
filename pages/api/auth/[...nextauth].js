// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: "680089407523-mf1ph23o91d4eb6vlnf012ucbg5ag42j.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // Add other authentication providers here if needed
  ],
});