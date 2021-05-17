import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { User, UserSchema } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let userController: UserController;

  const mockUser = {
    name: "POLNAREF",
    email: "polnaref@gmail.com",
    password: "qazwsx",
  };

  const mockUserId = "";

  const mockUpdateUser = {
    
  }

  beforeEach(async () => {
    const user: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        {
          provide: getModelToken(User.name),
          useValue: UserSchema,
        },
      ],
    }).compile();

    userController = user.get<UserController>(UserController);
  });

  describe('create', () => {
    it("should return single User Object!", () => {
      expect(userController.create(mockUser)).toBe(User);
    });
  });

  describe('findOne', () => {
    it("should return single User Object!", () => {
      expect(userController.findOne(mockUserId)).toBe(User);
    });
  });

  describe('findAll', () => {
    it("should return array of User Objects!", () => {
      expect(userController.findOne(mockUserId)).toBe([User]);
    });
  });

  describe('update', () => {
    it("should return array of User Objects!", () => {
      expect(userController.update(mockUserId, mockUpdateUser)).toBe(User);
    });
  });
});
