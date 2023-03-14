import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { toast } from "react-toastify";

export default function CheckoutDetail() {
  const [dataItem, setDataItem] = useState({
    verifyID: "",
    bankAccountName: "",
    nominalData: {
      _id: "",
      coinName: "",
      coinQuantity: 0,
      price: 0,
    },
    paymentData: {
      payment: {
        _id: "",
        type: "",
      },
      bank: {
        _id: "",
        accountNumber: "",
        bankName: "",
        owner: "",
      },
    },
  });
  const router = useRouter();
  useEffect(() => {
    const dataFromLocal = localStorage.getItem("top-up-data");
    if (!dataFromLocal) {
      toast.error("Please select payment and nominal first", {
        position: "top-center",
        theme: "colored",
      });
      router.back();
    } else setDataItem(JSON.parse(dataFromLocal));
  }, []);
  return (
    <>
      <div className="purchase pt-md-50 pt-30">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Purchase Details
        </h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Game ID{" "}
          <span className="purchase-details">{dataItem.verifyID}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Order ID <span className="purchase-details">#GG001</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Item{" "}
          <span className="purchase-details">
            {dataItem.nominalData.coinQuantity} {dataItem.nominalData.coinName}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Price{" "}
          <span className="purchase-details">
            <NumericFormat
              value={dataItem.nominalData.price}
              displayType="text"
              prefix="IDR "
              decimalSeparator=","
              thousandSeparator="."
            />
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Tax (10%){" "}
          <span className="purchase-details">
            <NumericFormat
              value={dataItem.nominalData.price * 0.1}
              displayType="text"
              prefix="IDR "
              decimalSeparator=","
              thousandSeparator="."
            />
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Total{" "}
          <span className="purchase-details color-palette-4">
            <NumericFormat
              value={
                dataItem.nominalData.price + dataItem.nominalData.price * 0.1
              }
              displayType="text"
              prefix="IDR "
              decimalSeparator=","
              thousandSeparator="."
            />
          </span>
        </p>
      </div>
      <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Payment Information
        </h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Account Name{" "}
          <span className="purchase-details">{dataItem.bankAccountName}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Type{" "}
          <span className="payment-details">
            {dataItem.paymentData.payment.type}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Name{" "}
          <span className="payment-details">
            {dataItem.paymentData.bank.bankName}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Account Name{" "}
          <span className="payment-details">
            {dataItem.paymentData.bank.owner}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Number{" "}
          <span className="payment-details">
            {dataItem.paymentData.bank.accountNumber}
          </span>
        </p>
      </div>
    </>
  );
}
