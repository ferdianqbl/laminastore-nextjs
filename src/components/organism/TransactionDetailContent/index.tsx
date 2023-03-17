import Link from "next/link";
import Row from "./Row";
import { TransactionHistoryTypes } from "../../../../services/data-types";
import Image from "next/image";

interface TransactionDetailContentProps {
  data: TransactionHistoryTypes;
}

export default function TransactionDetailContent({
  data,
}: TransactionDetailContentProps) {
  const ROOT_IMG = process.env.NEXT_PUBLIC_ROOT_IMG;

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Details #{data._id}
        </h2>
        <div className="details">
          <div className="main-content main-content-card overflow-auto">
            <section className="checkout mx-auto">
              <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
                <div className="game-checkout d-flex flex-row align-items-center">
                  <div className="pe-4">
                    <div className="cropped">
                      <Image
                        src={`${ROOT_IMG}/voucher/${data.voucherTopupHistory.thumbnail}`}
                        width="200"
                        height="130"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <p className="fw-bold text-xl color-palette-1 mb-10">
                      {data.voucherTopupHistory.gameName}
                    </p>
                    <p className="color-palette-2 m-0">
                      Category: {data.voucherTopupHistory.category}
                    </p>
                  </div>
                </div>
                <div>
                  <p
                    className={`fw-medium text-center label m-0 rounded-pill ${data.status.toLowerCase()}`}
                  >
                    {data.status}
                  </p>
                </div>
              </div>
              <hr />
              <div className="purchase pt-30">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">
                  Purchase Details
                </h2>
                <Row label="Your Game ID" value={data.accountName} />
                <Row label="Order ID" value={data._id} />
                <Row
                  label="Item"
                  value={`${data.voucherTopupHistory.coinQuantity} ${data.voucherTopupHistory.coinName}`}
                />
                <Row label="Price" value={data.voucherTopupHistory.price} />
                <Row label="Tax (10%)" value={data.tax} />
                <Row
                  label="Total"
                  value={data.value}
                  className="color-palette-4"
                />
              </div>
              <div className="payment pt-10 pb-10">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">
                  Payment Informations
                </h2>
                <Row label="Your Account Name" value={data.name} />
                <Row label="Type" value={data.paymentHistory.type} />
                <Row label="Bank Name" value={data.paymentHistory.bankName} />
                <Row
                  label="Bank Account Name"
                  value={data.paymentHistory.owner}
                />
                <Row
                  label="Bank Number"
                  value={data.paymentHistory.accountNumber}
                />
              </div>
              <div className="d-md-block d-flex flex-column w-100">
                <Link
                  className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg"
                  href="#"
                  role="button"
                >
                  WhatsApp ke Admin
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
