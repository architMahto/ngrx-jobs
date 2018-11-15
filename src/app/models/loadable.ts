export interface Loadable {
  readonly error: Error;
  readonly isLoading: boolean;
  readonly isReceived: boolean;
}

export function createDefaultLoadable() {
  return {
    error: null,
    isLoading: false,
    isReceived: false
  };
}
