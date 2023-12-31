import {type userPrivateMetadataSchema} from "@/lib/validations/auth";
import {type z} from "zod";

export type UserRole = z.infer<typeof userPrivateMetadataSchema.shape.role>
