type SaveCreditCardButtonProps = {
  onClick: () => void;
};

export const SaveCreditCardButton = ({ onClick }: SaveCreditCardButtonProps) => {
  return <button onClick={onClick}>Save</button>;
};
