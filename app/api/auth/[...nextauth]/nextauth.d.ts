// nextauth.d.ts
// Ref next.js module augmentation

// import { UserEvent } from "@prisma/client";
// import { DefaultSession, DefaultUser } from "next-auth"
// import { JWT, DefaultJWT } from "next-auth/jwt"

// declare module "next-auth" {
  
//     interface Session {
//       user: {
//         id: string;
//         role: string;
//         joinDate: Date;
//         location: string;    
//         dob: Date        
//         events: UserEvent[]
//       } & DefaultSession
//     }

//     interface User extends DefaultUser {
//         id: string;
//         role: string;
//         joinDate: Date;
//         location: string;    
//         dob: Date        
//         events: UserEvent[]
//     }
// }

// declare module "next-auth/jwt" {
//     interface JWT extends DefaultJWT{
//         id: string;
//         role: string;
//         joinDate: Date;
//         location: string;    
//         dob: Date        
//         events: UserEvent[]
//     }
// }