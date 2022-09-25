import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
export const CreateForm = () => {
  const schema = yup.object().shape({
    title: yup.string().required('title is mandatory'),
    description: yup.string().required('description is mandatory'),
  })

  interface CreateForm {
    title: string;
    description: string;
  }
  const { register, handleSubmit, formState: { errors } } =
    useForm<
      CreateForm>
      ({
        resolver: yupResolver(schema),
      })

  const createPost = (data: any) => { }
  return (
    <>
      <form onSubmit={handleSubmit(createPost)}>
        <input type='text' placeholder='title' {...register('title')} />
        <p>{errors.title?.message}</p>
        <textarea placeholder='description' />
        <p>{errors.title?.message}</p>
        <input type='submit' />
      </form>
    </>
  )
}
