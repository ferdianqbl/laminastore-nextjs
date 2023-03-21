import Image from "next/image";
import React from "react";
import { getFeaturedGame, getFeaturedGameDetail } from "../../services/player";
import Footer from "../../src/components/organism/Footer";
import Navbar from "../../src/components/organism/Navbar";
import TopUpForm from "../../src/components/organism/TopUpForm";
import TopUpItem from "../../src/components/organism/TopUpItem";
import {
  GameItemTypes,
  NominalTypes,
  PaymentTypes,
} from "../../services/data-types";

export default function Detail({
  dataItem,
  nominals,
  payments,
}: {
  dataItem: GameItemTypes;
  nominals: NominalTypes[];
  payments: PaymentTypes[];
}) {
  const ROOT_IMG = process.env.NEXT_PUBLIC_ROOT_IMG;

  return (
    <>
      <Navbar />
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
              Top Up
            </h2>
            <p className="text-lg color-palette-1 mb-0">
              Perkuat akun dan jadilah pemenang
            </p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <div className="row align-items-center">
                <div className="col-md-12 col-4">
                  <Image
                    src={`${ROOT_IMG}/voucher/${dataItem.thumbnail}`}
                    width="280"
                    height="380"
                    className="img-fluid"
                    alt=""
                  />
                </div>

                <TopUpItem data={dataItem} category="desktop" />
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <TopUpItem data={dataItem} category="mobile" />
              <hr />
              <TopUpForm nominals={nominals} payments={payments} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const result = await getFeaturedGame();
  const paths = result.data.map((item: GameItemTypes) => ({
    params: {
      voucherId: item._id,
    },
  }));

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps {
  params: {
    voucherId: string;
  };
}

export async function getStaticProps({ params }: GetStaticProps) {
  const { voucherId } = params;
  const result = await getFeaturedGameDetail(voucherId);
  const dataItem = result.data.detail;
  const nominals = result.data.detail.nominals;
  const payments = result.data.payments;

  return {
    props: {
      dataItem,
      nominals,
      payments,
    },
  };
}
