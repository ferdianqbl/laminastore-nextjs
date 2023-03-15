import { useState } from "react";
import { toast } from "react-toastify";
import { postCheckout } from "../../../../services/player";
import { useRouter } from "next/router";

export default function CheckoutConfirmation() {
  const [checked, setChecked] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();
  const onSubmitHandler = async () => {
    setIsClicked(true);
    if (!checked) {
      toast.error("Please check the checkbox", {
        position: "top-center",
        theme: "colored",
      });

      setIsClicked(false);
    } else {
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
      const result = await postCheckout(data);
      if (result.error) {
        toast.error(result.message, {
          position: "top-center",
          theme: "colored",
        });
        setIsClicked(false);
      } else {
        localStorage.removeItem("data-item");
        localStorage.removeItem("top-up-data");
        toast.success("Checkout success!", {
          position: "top-center",
          theme: "colored",
        });
        setIsClicked(false);
        router.push("/complete-checkout");
      }
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
          disabled={isClicked}
        >
          Confirm Payment
        </button>
      </div>
    </>
  );
}
