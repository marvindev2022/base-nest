import { InvalidParamError } from '@app/errors/InvalidParamError';
import { MissingParamError } from '@app/errors/MissingParamError';
import { z } from 'zod';

interface UserCreationProps {
  id?: string;
  name: string;
  logo: string;
}

interface UserProps extends UserCreationProps {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface NewUser {
  body: UserCreationProps;
  statusCode: number;
}

interface IsValidMethodReturn {
  isValid: boolean;
  body: any;
  statusCode: number;
}

export class User {
  props: UserProps;

  constructor(props: UserProps) {
    const { ...supplieProps } = props;
    const newUser = this.handle(supplieProps);

    if (newUser.statusCode >= 300) {
      throw newUser.body;
    }
    this.props = {
      ...newUser.body,
    };
  }

  private handle(props: UserCreationProps): NewUser {
    const { isValid, body, statusCode } = this.isValid(props);

    if (!isValid) {
      return {
        body: body,
        statusCode: statusCode,
      };
    }

    return {
      body: props,
      statusCode: 200,
    };
  }

  private isValid(params: UserCreationProps): IsValidMethodReturn {
    const supplieSchema = z.object({
      name: z.string().min(3, { message: 'Invalid' }).max(255),
      logo: z.string().min(3, { message: 'Invalid' }).max(255),
    });

    const supplieIsValid = supplieSchema.safeParse(params);
    if (!supplieIsValid.success) {
      const errorPath = supplieIsValid.error.issues[0].path[0].toString();
      const errorMessage = supplieIsValid.error.issues[0].message;
      const errorBody =
        errorMessage === 'Invalid'
          ? new InvalidParamError(errorPath)
          : new MissingParamError(errorPath);

      return {
        isValid: false,
        body: errorBody,
        statusCode: 400,
      };
    }
    return {
      isValid: true,
      body: null,
      statusCode: 200,
    };
  }
}
export default User;
