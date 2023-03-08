import Link from "next/link";
import NominalItem from "../TopUpItem/NominalItem";
import PaymentItem from "../TopUpItem/PaymentItem";

export default function TopUpForm() {
  return (
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
          />
        </div>
      </div>
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Nominal Top Up
        </p>
        <div className="row justify-content-between">
          <NominalItem
            _id="1212"
            coinQuantity={20}
            coinName="GOLD"
            price={50000}
          />
          <NominalItem
            _id="1213"
            coinQuantity={20}
            coinName="GOLD"
            price={50000}
          />
          <NominalItem
            _id="1214"
            coinQuantity={20}
            coinName="GOLD"
            price={50000}
          />
          <div className="col-lg-4 col-sm-6"></div>
        </div>
      </div>
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Payment Method
        </p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            <PaymentItem bankID="1" bankName="mandiri" type="transfer" />
            <PaymentItem bankID="2" bankName="bca" type="visa" />
            <PaymentItem bankID="3" bankName="bri" type="transfer" />
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
        />
      </div>
      <div className="d-sm-block d-flex flex-column w-100">
        <Link
          href="/checkout"
          type="submit"
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
        >
          Continue
        </Link>
      </div>
    </form>
  );
}
