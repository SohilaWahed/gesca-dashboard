import {z} from 'zod'

export const createEmployeeSchema = z.object({
   email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  phone: z.string().optional(),
  roleName: z.enum([
    "Admin",
    "Manager",
    "SalesEmployee",
  ]),
});


export const updateEmployeeSchema = z.object({
  firstName: z.string().min(2).optional(),
  lastName: z.string().min(2).optional(),
  phone: z.string().optional(),
  status: z.enum(["ACTIVE", "INACTIVE", "PENDING_VERIFICATION"]).optional(),
  roleName: z.enum(['Admin', 'Manager', 'SalesEmployee']).optional(),
});




