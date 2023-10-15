// nextauth.d.ts
// Ref next.js module augmentation

import { UserEvent } from "@prisma/client";
import { DefaultSession, DefaultUser } from "next-auth"
import { JWT, DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
  
    interface Session {
      id: string;
      role: string;
      joinDate: Date;
      location: string;    
      dob: Date        
      events: UserEvent[]
      & DefaultSession
    }

    interface User {
      role: string;
      joinDate: Date;
      location: string;    
      dob: Date        
      events: UserEvent[]
      & DefaultUser
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        role: string;
        joinDate: Date;
        location: string;    
        dob: Date        
        events: UserEvent[]
        & DefaultJWT
    }
}