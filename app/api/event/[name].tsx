import { Event } from "@prisma/client";
import { GetStaticProps } from "next";


// export const getStaticProps: GetStaticProps = async (context) => {
//     const itemID = context.params?.something;
//     const data = await getData();
//     const foundItem = data.stars.find((event: Event) => event.id == );
  
//     if (!foundItem) {
//       return {
//         props: { hasError: true },
//       }
//   }
  
//   return {
//     props: {
//       specificStarData: foundItem
//     }
//   }
// }