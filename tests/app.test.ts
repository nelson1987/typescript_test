import { isValid } from 'zod';
import { handler, UserBio } from '../src/app';

const userBio: UserBio = {
  userName: 'ABCD',
  bio: "I'm John Doe, a Web developer and a Tech writer.",
};

describe('Handler', () => {
  it('Validation Pass', () => {
    expect(handler(userBio)).toEqual({
      data: {
        bio: "I'm John Doe, a Web developer and a Tech writer.",
        userName: 'ABCD',
      },
      isValid: true,
    });
  });
  it('Validation Error', () => {
    const userBio: UserBio = {
      userName: '',
      bio: 'I'.repeat(24),
    };
    expect(handler(userBio)).toEqual({
      error: { bio: ['Bio must be at least 25 characters long'] },
      isValid: false,
    });
  });
  it('should return ExceptionResult when exceptions tart', () => {
    const result = handler(null);
    expect(result).toEqual({
      error: { bio: ['Bio must not expected 120 characters'] },
      isValid: false,
    });
  });
});
describe('Validation', () => {
  it('Validation Pass', () => {
    expect(handler(userBio)).toEqual({
      data: {
        bio: "I'm John Doe, a Web developer and a Tech writer.",
        userName: 'ABCD',
      },
      isValid: true,
    });
  });
  it('Validation Bio must be at least 25 characters long', () => {
    const userBio: UserBio = {
      userName: '',
      bio: 'I'.repeat(24),
    };
    expect(handler(userBio)).toEqual({
      error: { bio: ['Bio must be at least 25 characters long'] },
      isValid: false,
    });
  });
  it('Validation Bio must not expected 120 characters', () => {
    const userBio: UserBio = {
      userName: '',
      bio: 'I'.repeat(121),
    };
    expect(handler(userBio)).toEqual({
      error: { bio: ['Bio must not expected 120 characters'] },
      isValid: false,
    });
  });
});
