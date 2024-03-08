import { useState } from "react";
import { AddNewCreditCard, NewCreditCardForm } from "features/CreditCard";
import { Dashboard } from "features/Dashboard";

export const App = () => {
  const [displayNewForm, setDisplayNewForm] = useState<boolean>(false);

  const onAddNewCreditCardButtonClick = () => {
    if (!displayNewForm) {
      setDisplayNewForm(true);
    }
  }

  return (
    <>
      <Dashboard />
      {
        displayNewForm && <NewCreditCardForm changeFormState={() => setDisplayNewForm(false)} />
      }
      {
        !displayNewForm && <AddNewCreditCard changeFormState={onAddNewCreditCardButtonClick} />
      }
    </>
  );
};
