import { useState } from "react";
import { toast } from "react-toastify";

export default function CheckoutConfirmation() {
  const [checked, setChecked] = useState(false);

  const onSubmitHandler = () => {
    if (!checked)
      toast.error("Please check the checkbox", {
        position: "top-center",
        theme: "colored",
      });
    else {
      const dataItem = JSON.parse(localStorage.getItem("data-item")!);
      const dataTopUp = JSON.parse(localStorage.getItem("top-up-data")!);
      const data = {
        voucherId: dataItem._id,
        nominalId: dataTopUp.nominalData._id,
        paymentId: dataTopUp.paymentData.payment._id,
        bankId: dataTopUp.paymentData.bank._id,
        bankOwner: dataTopUp.bankAccountName,
        accountUser: dataTopUp.verifyID,
      };
      console.log(data);
    }
  };

  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <span className="checkmark"></span>
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button
          type="button"
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          onClick={onSubmitHandler}
        >
          Confirm Payment
        </button>
      </div>
    </>
  );
}
