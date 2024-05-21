import * as Yup from 'yup'

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please type a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Minimum of 6 character')
    .required('Password is required')
})

export const PostSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  body: Yup.string().required('Body Is required')
})

// register schema
export const RegisterSchema = Yup.object().shape({
  firstname: Yup.string().required('Firstname required'),
  lastname: Yup.string().required('Lastname required'),
  email: Yup.string()
    .email('Please type a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Minimum of 6 character')
    .required('Password is required'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  )
})
