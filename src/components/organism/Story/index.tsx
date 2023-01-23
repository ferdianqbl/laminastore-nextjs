import Image from "next/image";

export default function Story() {
  return (
    <section className="story pt-50 pb-50">
      <div className="container-xxl container-fluid">
        <div className="row align-items-center mx-auto gap-lg-0 gap-4">
          <div
            className="col-lg-6 col-12 d-lg-flex d-none justify-content-lg-end"
            data-aos="zoom-in"
          >
            <Image
              src="/img/Header-9.png"
              width="612"
              height="452"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-6 col-12 ps-lg-60">
            <div className="">
              <h2 className="text-4xl fw-bold color-palette-1 mb-30">
                Win the battle.
                <br /> Be the Champion.
              </h2>
              <p className="text-lg color-palette-1 mb-30">
                Kami menyediakan jutaan cara untuk membantu players menjadi
                pemenang sejati
              </p>
              <div className="d-md-block d-flex flex-column w-100">
                <a
                  className="btn btn-read text-lg rounded-pill"
                  href="#"
                  role="button"
                >
                  Read Story
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
