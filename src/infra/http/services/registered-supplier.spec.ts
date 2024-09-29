import { inMemoryUserRepository } from '@test/repositories/in-memory-user-repository';
import { UserService } from './user.service';

describe('User', () => {
  it('should register a new user', async () => {
    const supplieRepository = new inMemoryUserRepository();
    const supplieService = new UserService(supplieRepository);

    const newUser = {
      name: 'any_string',
      logo: 'any_string',
    };

    const user = await supplieService.create(newUser);

    expect(supplieRepository.users[0]).toBe(user);
  });
});
