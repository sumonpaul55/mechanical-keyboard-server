export interface Couple {
  name: string;
  partnerName: string;
}

import { z } from "zod";

export const coupleSchema = z.object({
  name: z.string().min(3, "Name is required minimum 3 characters"),
  partnerName: z.string().min(3, "Partner name is required minimum 3 characters"),
}).refine(
  (data) => data.name.trim().toLowerCase() !== data.partnerName.trim().toLowerCase(),
  {
    message: "Name and Partner Name cannot be the same",
    path: ["partnerName"], // error will show on partnerName field
  });



export const loveInterface = { coupleSchema };