import { MissingParamError } from '@app/errors/MissingParamError';
import { HttpRequest } from '@app/protocols/http';
import User from './user';

describe('User', () => {
  const makeSut = (props: HttpRequest) => {
    const newUser = new User(props.body);

    return newUser;
  };

  it('should throw missing error param if none name is provided', () => {
    const httpRequest = {
      body: {
        logo: 'any_string',
      },
    };

    expect(() => makeSut(httpRequest)).toThrow(new MissingParamError('name'));
  });

  it('should throw missing error param if none logo is provided', () => {
    const httpRequest = {
      body: {
        name: 'any_string',
      },
    };

    expect(() => makeSut(httpRequest)).toThrow(new MissingParamError('logo'));
  });

  it('should throw missing error param if none totalCustomers is provided', () => {
    const httpRequest = {
      body: {
        name: 'any_string',
        logo: 'any_string',
      },
    };

    expect(() => makeSut(httpRequest)).toThrow(
      new MissingParamError('totalCustomers'),
    );
  });

  it('should return a new user if all params are provided', () => {
    const httpRequest = {
      body: {
        name: 'any_string',
        logo: 'any_string',
      },
    };

    const newUser = makeSut(httpRequest);

    expect(newUser.props).toEqual({
      logo: httpRequest.body.logo,
      name: httpRequest.body.name,
    });
  });
});
