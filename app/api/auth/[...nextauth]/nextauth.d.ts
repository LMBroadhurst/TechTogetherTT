// // nextauth.d.ts
// export enum Role {
//     user = "user",
//     admin = "admin",
// }

// // nextauth.d.ts
// declare module "next-auth" {
//     interface User {
//         location?: string;
//         role?: Role;
//         subscribed?: boolean;
//     }
  
//     interface Session extends DefaultSession {
//       user?: User;
//     }
// }

// // nextauth.d.ts
// declare module "next-auth/jwt" {
//     interface JWT {
//       id: number;
//       role?: Role;
//       subscribed?: boolean;
//     }
// }