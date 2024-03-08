import { SaveCreditCardButton } from "./components";

type NewCreditCardFormProps = {
  changeFormState: () => void
}

export const NewCreditCardForm = ({changeFormState}: NewCreditCardFormProps) => {
  return (
    <>
      {/* Row */}
      <>
        <label>Name: </label>
        <input />
      </>
      {/* Row */}
      <>
        <label>APR</label>
        <input />
      </>
      {/* Row */}
      <>
        <label>Limit</label>
        <input />
      </>
      {/* Row */}
      <>
        <label>Starting Balance</label> <input />
      </>
      {/* Row */}
      <>
        <label>Starting Utilization</label>
        {/* do calculation here */}
      </>

      <SaveCreditCardButton onClick={changeFormState} />
    </>
  );
};
