import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { InputField } from '../inputs/InputField';
import { useTranslation } from 'react-i18next';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  align-items: center;
`;

const StyledButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.text};
  padding: 5px 10px;
  border-radius: 5px;
`;

export interface IFormInput {
  email: string;
  password: string;
  passwordRepeat: string;
}

const schema = yup.object({
  email: yup.string().email('valid').required('required'),
  password: yup.string().required('required').min(5, 'min'),
  passwordRepeat: yup
    .string()
    .required('required')
    .test((value, ctx) => {
      if (value !== ctx.from[0].value.password) {
        return ctx.createError({ message: 'notMatch' });
      }
      return true;
    }),
});

export const RegistrationForm = () => {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <h3>{t`buttons.registration`}</h3>
      <InputField error={errors?.email} type="text" name="email" register={register} />
      <InputField error={errors?.password} type="password" name="password" register={register} />
      <InputField error={errors?.passwordRepeat} type="password" name="passwordRepeat" register={register} />
      <StyledButton type="submit">{t`buttons.registration`}</StyledButton>
    </StyledForm>
  );
};
