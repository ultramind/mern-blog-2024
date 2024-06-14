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
  title: Yup.string().required('Title is required')
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

// Update Profile schema
export const UpdateProfileSchema = Yup.object().shape({
  firstname: Yup.string().required('Firstname required'),
  lastname: Yup.string().required('Lastname required'),
  email: Yup.string()
    .email('Please type a valid email')
    .required('Email is required'),
  stack: Yup.string().required('Stack Required')
});

// comment schema
export const CommentSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  comment: Yup.string().required('Comment required')
})

// Socials schema
export const SocialSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  url: Yup.string().required('Url required')
})


// reply schema
export const ReplySchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  reply: Yup.string().required('reply required')
})

// add category schema
export const CategorySchema = Yup.object().shape({
  category: Yup.string().required('Category is required')
})
