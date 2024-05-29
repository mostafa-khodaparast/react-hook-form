import { useFormContext } from 'react-hook-form'
import { Stack, TextField } from '@mui/material'
import { UserSchema } from '../types/schema'
import RHFautocomplete from '../../components/RHFautocomplete'
import { useGenders, useLanguages, useSkills, useStates } from '../services/queries'
import RHFtogglebuttongroup from '../../components/RHFtogglebuttongroup'
import RHFradiogroup from '../../components/RHFradiogroup'
import RHFcheckbox from '../../components/RHFcheckbox'


export default function Users() {

    const {
        register,
        formState: { errors }
    } = useFormContext<UserSchema>()

    const statesQuery = useStates()
    const languagesQuery = useLanguages()
    const genderQuery = useGenders()
    const skillsQuery = useSkills()

    return (
        <Stack sx={{ gap: 2 }}>
            <TextField
                {...register('name')}
                label="Name"
                error={!!errors.name}
                helperText={errors.name?.message}
            />
            <TextField
                {...register('email')}
                label="Email"
                error={!!errors.email}
                helperText={errors.email?.message}
            />
            <RHFautocomplete<UserSchema>
                name='states'
                label='states'
                options={statesQuery.data}
            />
            <RHFtogglebuttongroup<UserSchema>
                name='languagesSpoken'
                options={languagesQuery.data}
            />
            <RHFradiogroup<UserSchema>
                name='gender'
                label='Gender'
                options={genderQuery.data}
            />
            <RHFcheckbox<UserSchema>
                name='skills'
                label='Skills'
                options={skillsQuery.data}
            />
        </Stack>
    )
}
