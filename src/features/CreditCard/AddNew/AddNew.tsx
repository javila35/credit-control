type AddNewCreditCardProps = {
  changeFormState: () => void;
};

export const AddNewCreditCard = ({ changeFormState }: AddNewCreditCardProps) => {
  return <button onClick={changeFormState}>+ New Credit Card</button>;
};
