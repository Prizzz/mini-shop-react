interface ErrorMessageProps {
  error: string;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return <p className="text-center font-bold font-xl">{error}</p>;
};

export default ErrorMessage;
