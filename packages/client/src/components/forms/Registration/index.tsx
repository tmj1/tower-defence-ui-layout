import { Form } from '../../Form'
import { Input } from '../../Input'
import { Button } from '../../Button'
import { useFormik } from 'formik'
import { FC, FormEvent, useState } from 'react'
import { RoutesNameList } from '../../../constant'
import { getValidationSchema } from '../../../utils/validation'
import { Link } from '../../Link'

type LoginFields = {
  email: string
  login: string
  name: string
  chatname:string
  password: string
  repeatPassword: string
}

const LoginSchema = getValidationSchema<LoginFields>('email', 'login', 'name', 'chatname', 'password', 'repeatPassword')

export const RegistrationForm: FC = props => {
  const [shouldValidateOnChange, setShouldValidateOnChange] = useState(false)
  const initialValues: LoginFields = {
    email: '',
    login: '',
    name: '',
    chatname:'',
    password: '',
    repeatPassword:''
  }

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    validateOnBlur: false,
    validateOnChange: shouldValidateOnChange,
    onSubmit: (values, actions) => {
      setTimeout(() => {
        console.log(JSON.stringify(values))
        actions.setSubmitting(false)
      }, 1000)
    },
  })

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()
    if (!shouldValidateOnChange) {
      setShouldValidateOnChange(true)
    }
    return formik.handleSubmit()
  }

  return (
    <Form
      title='<Регистрация>'
      name='login-form'
      formActions={<>
        <Button
          text='Зарегистрироваться'
          disabled={formik.isSubmitting || !formik.isValid}
          type='submit'
          onClick={submitHandler} />
      </>}
      {...props}>
      <Input
        name="email"
        placeholder="tmj1@mail.ru"
        label="Email"
        isValid={!formik.errors.email}
        error={formik.errors.email}
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <Input
        name="login"
        placeholder="tmj1"
        label="Логин"
        isValid={!formik.errors.login}
        error={formik.errors.login}
        onChange={formik.handleChange}
        value={formik.values.login}
      />
      <Input
        name="name"
        placeholder="Иван Иванов"
        label="Имя"
        isValid={!formik.errors.name}
        error={formik.errors.name}
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <Input
        name="chatname"
        placeholder="tmj"
        label="Имя в чате"
        isValid={!formik.errors.chatname}
        error={formik.errors.chatname}
        onChange={formik.handleChange}
        value={formik.values.chatname}
      />
      <Input
        name="password"
        label="Пароль"
        placeholder="password"
        type="password"
        isValid={!formik.errors.password}
        error={formik.errors.password}
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <Input
        name="repeatPassword"
        label="Пароль еще раз"
        placeholder="password"
        type="password"
        isValid={!formik.errors.repeatPassword}
        error={formik.errors.repeatPassword}
        onChange={formik.handleChange}
        value={formik.values.repeatPassword}
      />
    </Form>
  )
}
