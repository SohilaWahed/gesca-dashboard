import {z} from 'zod'

export const createEmployeeSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  phone: z.string().optional(),
  roleName: z.enum(['Admin', 'Manager', 'SalesEmployee']).default('SalesEmployee'),
});


export const updateEmployeeSchema = z.object({
  firstName: z.string().min(2).optional(),
  lastName: z.string().min(2).optional(),
  phone: z.string().optional(),
  status: z.enum(["ACTIVE", "INACTIVE", "PENDING_VERIFICATION"]).optional(),
  roleName: z.enum(['Admin', 'Manager', 'SalesEmployee']).optional(),
});



