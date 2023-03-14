import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function CheckoutItem() {
  const [dataItem, setDataItem] = useState({
    thumbnail: "",
    name: "",
    category: {
      name: "",
    },
  });
  const router = useRouter();
  useEffect(() => {
    const dataFromLocal = localStorage.getItem("data-item");
    if (!dataFromLocal) {
      toast.error("Please select a game first", {
        position: "top-center",
        theme: "colored",
      });
      router.back();
    } else setDataItem(JSON.parse(dataFromLocal));
  }, []);
  return (
    <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
      <div className="pe-4">
        <div className="cropped">
          <img
            src={`${process.env.NEXT_PUBLIC_ROOT_IMG}/${dataItem.thumbnail}`}
            className="img-fluid"
            alt=""
          />
        </div>
      </div>
      <div>
        <p className="fw-bold text-xl color-palette-1 mb-10">{dataItem.name}</p>
        <p className="color-palette-2 m-0">
          Category: {dataItem.category.name}
        </p>
      </div>
    </div>
  );
}
