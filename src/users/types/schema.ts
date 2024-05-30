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
        }),
    states: z
        .array(z.string())
        .min(1, { message: 'required field' })
        .max(2, { message: 'maximum 2 elements are needed' }),
    languagesSpoken: z
        .array(z.string()),
    gender: z
        .string()
        .min(1, { message: 'required field' }),
    skills: z
        .array(z.string())
        .max(2, { message: 'maximum 2 elements are needed' }),
    registrationDateAndTime: z
        .date(),
    employmentPeriod: z
        .array(z.date())
        .min(2)
        .max(2),
    salaryRange: z
        .array(z.number())
        .min(2)
        .max(2),
    isTeacher: z.boolean()
})

export type UserSchema = z.infer<typeof userSchema>

export const defaultValues: UserSchema = {
    name: '',
    email: '',
    states: [],
    languagesSpoken: [],
    gender: '',
    skills: [],
    registrationDateAndTime: new Date(),
    employmentPeriod: [new Date(), new Date()],
    salaryRange: [0, 4000],
    isTeacher: true
}