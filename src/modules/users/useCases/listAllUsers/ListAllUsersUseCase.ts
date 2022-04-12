import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const foundId = this.usersRepository.findById(user_id);

    if (!foundId) {
      throw new Error("Use does not exist!");
    }
    if (!foundId.admin) {
      throw new Error("User provided is not an admin!");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
