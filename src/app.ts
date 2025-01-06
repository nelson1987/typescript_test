export const sum = (a: number, b: number) => {
  try {
    throw new Error("Oops");
    //return a + b;
  } catch (error) {
    reportError(error.message);
  }
};
const reportError = (message: string) => {};
export type Response = {
  message: string;
  isValid: boolean;
};
export const errorResponse = (messageResponse: string) => {
  return { message: messageResponse, isValid: false };
};
// export const somar = (a: number, b: number): number => {
//   return a + b;
// };
// export const sum = (a: string, b: number): string => `${b}${a}`;
