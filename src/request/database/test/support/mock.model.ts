export abstract class MockModel<T> {
  protected abstract entityStub: T;

  constructor(createEntityData: T) {
    this.constructorSpy(createEntityData);
  }

  constructorSpy(_createEntityData: T): void {}

  findAll(): { exec: () => T } {
    return {
      exec: (): T => this.entityStub,
    };
  }
}
