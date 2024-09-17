const ErrorMessage = ({ Items }) => {
  return <>{Items.length === 0 && <p>i'm still hungry</p>}</>;
};

export default ErrorMessage;
