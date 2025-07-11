export type Tool<P = unknown, A = unknown | string, R = unknown | string> = {
  name: string;
  description: string;
  parameters: P;
  handler: (input: A) => Promise<R>;
};
