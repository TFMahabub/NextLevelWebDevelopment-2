//with try catch
type ErrorType = {
  message: string;
};
try {
} catch (error) {
  console.log((error as ErrorType).message);
}
