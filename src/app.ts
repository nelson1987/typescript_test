import { z, ZodIssue } from 'zod';
export type ValidationError = {
  [key: string]: string[];
};
export type ValidationResponse = {
  isValid: boolean;
  data?: unknown;
  error?: ValidationError | Error;
};
export const FailResult = (error: ValidationError): ValidationResponse => {
  return {
    isValid: false,
    error: error,
  };
};
export const ExceptionResult = (error: Error): ValidationResponse => {
  return {
    isValid: false,
    error: error,
  };
};
export const SuccessResult = (data: unknown): ValidationResponse => {
  return {
    isValid: true,
    data: data,
  };
};

export type UserBio = {
  userName: string;
  bio: string;
};
const UserBioSchema = z.object({
  userName: z.string(), //{
  //     required_error: 'Nome é obrigatório',
  //     invalid_type_error: 'Nome deve ser uma string',
  //   })
  //   .min(3, 'Nome deve ter no mínimo 3 caracteres')
  //   .max(50, 'Nome deve ter no máximo 50 caracteres'),
  bio: z
    .string()
    .min(25, 'Bio must be at least 25 characters long')
    .max(120, 'Bio must not expected 120 characters'),
});
export const formatError = (errors: ZodIssue[]): ValidationError => {
  return errors.reduce((acc: { [key: string]: string[] }, curr) => {
    const path = curr.path[0] as string;
    if (!acc[path]) {
      acc[path] = [];
    }
    acc[path].push(curr.message);
    return acc;
  }, {});
};
export const handler = (userBio: UserBio): ValidationResponse => {
  try {
    const parsedUserBio = UserBioSchema.safeParse(userBio);
    if (parsedUserBio.success) {
      return SuccessResult(parsedUserBio.data);
    } else {
      const errors = formatError(parsedUserBio.error.errors);
      return FailResult(errors);
    }
  } catch (error) {
    return ExceptionResult(error);
  }
};

export const verificar = (userBio: number): string => {
  try {
    return `user é ${userBio}`;
  } catch (error) {
    return `erro`;
  }
};
