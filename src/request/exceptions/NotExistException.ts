export class NotExistException extends Error {
  constructor(msg: string) {
    super(msg);
  }
}
