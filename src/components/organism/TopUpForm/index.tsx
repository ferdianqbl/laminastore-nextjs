import { toast } from "react-toastify";

import {
  BankTypes,
  NominalTypes,
  PaymentTypes,
} from "../../../../services/data-types";
import NominalItem from "../TopUpItem/NominalItem";
import PaymentItem from "../TopUpItem/PaymentItem";
import { useState } from "react";
import { useRouter } from "next/router";

interface TopUpFormProps {
  nominals: NominalTypes[];
  payments: PaymentTypes[];
}

export default function TopUpForm({ nominals, payments }: TopUpFormProps) {
  const [verifyID, setVerifyID] = useState("");
  const [bankAccountName, setBankAccountName] = useState("");
  const [nominalData, setNominalData] = useState({});
  const [paymentData, setPaymentData] = useState({});
  const router = useRouter();

  const nominalChangeHandler = (nominalData: NominalTypes) => {
    setNominalData(nominalData);
  };
  const paymentChangeHandler = (
    paymentData: PaymentTypes,
    bankData: BankTypes
  ) => {
    const data = {
      payment: paymentData,
      bank: bankData,
    };
    setPaymentData(data);
  };

  const clickHandler = () => {
    if (
      verifyID === "" ||
      bankAccountName === "" ||
      Object.keys(nominalData).length === 0 ||
      Object.keys(paymentData).length === 0
    ) {
      toast.error("Please fill all the fields", {
        position: "top-center",
        autoClose: 1500,
        theme: "colored",
      });
    } else {
      const data = {
        verifyID,
        bankAccountName,
        nominalData,
        paymentData,
      };

      localStorage.setItem("top-up-data", JSON.stringify(data));
      if (localStorage.getItem("top-up-data")) router.push("/checkout");
    }
  };

  return (
    <>
      <form action="./checkout.html" method="POST">
        <div className="pt-md-50 pt-30">
          <div className="">
            <label
              htmlFor="ID"
              className="form-label text-lg fw-medium color-palette-1 mb-10"
            >
              Verify ID
            </label>
            <input
              type="text"
              className="form-control rounded-pill text-lg"
              id="ID"
              name="ID"
              aria-describedby="verifyID"
              placeholder="Enter your ID"
              value={verifyID}
              onChange={(e) => setVerifyID(e.target.value)}
            />
          </div>
        </div>
        <div className="pt-md-50 pb-md-50 pt-30 pb-20">
          <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
            Nominal Top Up
          </p>
          <div className="row justify-content-between">
            {nominals.map((item) => (
              <NominalItem
                key={item._id}
                _id={item._id}
                coinQuantity={item.coinQuantity}
                coinName={item.coinName}
                price={item.price}
                onChange={() => nominalChangeHandler(item)}
              />
            ))}
            <div className="col-lg-4 col-sm-6"></div>
          </div>
        </div>
        <div className="pb-md-50 pb-20">
          <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
            Payment Method
          </p>
          <fieldset id="paymentMethod">
            <div className="row justify-content-between">
              {payments.map((payment) =>
                payment.banks.map((bank) => (
                  <PaymentItem
                    key={bank._id}
                    bankID={bank._id}
                    bankName={bank.bankName}
                    type={payment.type}
                    onChange={() => paymentChangeHandler(payment, bank)}
                  />
                ))
              )}
              <div className="col-lg-4 col-sm-6"></div>
            </div>
          </fieldset>
        </div>
        <div className="pb-50">
          <label
            htmlFor="bankAccount"
            className="form-label text-lg fw-medium color-palette-1 mb-10"
          >
            Bank Account Name
          </label>
          <input
            type="text"
            className="form-control rounded-pill text-lg"
            id="bankAccount"
            name="bankAccount"
            aria-describedby="bankAccount"
            placeholder="Enter your Bank Account Name"
            value={bankAccountName}
            onChange={(e) => setBankAccountName(e.target.value)}
          />
        </div>
        <div className="d-sm-block d-flex flex-column w-100">
          <button
            type="button"
            className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
            onClick={clickHandler}
          >
            Continue
          </button>
        </div>
      </form>
    </>
  );
}
