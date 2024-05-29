import { z } from 'zod'
import { patterns } from '../../constants'

export const userSchema = z.object({
    name: z
        .string()
        .min(1, { message: 'required field' }),
    email: z
        .string()
        .min(1, { message: 'required field' })
        .refine(text => patterns.email.test(text), {
            message: 'Email not valid'
        })
})