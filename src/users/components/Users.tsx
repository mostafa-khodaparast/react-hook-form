//import { useFormContext } from 'react-hook-form'
import { Stack } from '@mui/material'
import { UserSchema } from '../types/schema'
import RHFautocomplete from '../../components/RHFautocomplete'
import { useGenders, useLanguages, useSkills, useStates } from '../services/queries'
import RHFtogglebuttongroup from '../../components/RHFtogglebuttongroup'
import RHFradiogroup from '../../components/RHFradiogroup'
import RHFcheckbox from '../../components/RHFcheckbox'
import { RHFdatetimepicker } from '../../components/RHFdatetimepicker'
import { RHFdaterangepicker } from '../../components/RHFdaterangepicker'
import { RHFSlider } from '../../components/RHFslider'
import { RHFswitch } from '../../components/RHFswitch'
import { RHFTextField } from '../../components/RHFtextfield'


export default function Users() {

    // const {
    //     register,
    //     formState: { errors }
    // } = useFormContext<UserSchema>()

    const statesQuery = useStates()
    const languagesQuery = useLanguages()
    const genderQuery = useGenders()
    const skillsQuery = useSkills()

    return (
        <Stack sx={{ gap: 2 }}>
            <RHFTextField<UserSchema>
                name="name"
                label="Name"
            />
            <RHFTextField<UserSchema>
                name="email"
                label="Email"
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
            <RHFdatetimepicker<UserSchema>
                name="registrationDateAndTime"
                label="Register Date & Time"
            />
            <RHFdaterangepicker<UserSchema>
                name='employmentPeriod'
            />
            <RHFSlider<UserSchema>
                name="salaryRange"
                label="Salary Range"
            />
            <RHFswitch<UserSchema>
                name="isTeacher"
                label="Are u a teacher?"
            />
        </Stack>
    )
}
