export class AlreadyExistException extends Error {
  constructor(msg: string) {
    super(msg);
  }
}
