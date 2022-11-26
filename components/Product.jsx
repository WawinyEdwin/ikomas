import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Product() {
  return (
    <div className="d-flex pt-4">
      <div className="product_image" style={{ width: "480px" }}>
        <Image src={"/product.webp"} height={400} width={400} alt="..." />
      </div> 
      <div className="product_info col">
        <h2>
          Remmie Fi Personal Care USB Ear Camera | Nose Camera, Throat Camera,
          Skin Camera | USB Camera for Nose Throat Skin Teeth Inspection |
          Compatible with Androids & Windows & Macs | NOT for iPhone/iPad
        </h2>
        <hr />
        <div className="about_item">
          <ul>
            <li>
              EASY TO USE - Plug and play Remmie Fi personal care ear, nose,
              throat, skin, teeth USB camera compatible with Androids & Windows
              & Macs, NOT for iPhone/iPad
            </li>
            <li>
              EASY TO USE - Plug and play Remmie Fi personal care ear, nose,
              throat, skin, teeth USB camera compatible with Androids & Windows
              & Macs, NOT for iPhone/iPad
            </li>
            <li>
              EASY TO USE - Plug and play Remmie Fi personal care ear, nose,
              throat, skin, teeth USB camera compatible with Androids & Windows
              & Macs, NOT for iPhone/iPad
            </li>
            <li>
              EASY TO USE - Plug and play Remmie Fi personal care ear, nose,
              throat, skin, teeth USB camera compatible with Androids & Windows
              & Macs, NOT for iPhone/iPad
            </li>
            <li>
              EASY TO USE - Plug and play Remmie Fi personal care ear, nose,
              throat, skin, teeth USB camera compatible with Androids & Windows
              & Macs, NOT for iPhone/iPad
            </li>
            <li>
              EASY TO USE - Plug and play Remmie Fi personal care ear, nose,
              throat, skin, teeth USB camera compatible with Androids & Windows
              & Macs, NOT for iPhone/iPad
            </li>
          </ul>
        </div>
      </div>
      <div className="purchase_card col">
        <div className="card">
          <div className="card-body text-center justify-content-center">
            <Link href={"/cart"}>
              <small className="btn btn-warning w-100">Add to Cart</small>
            </Link>
            <br /> <br />
            <Link href={"/cart"}>
              <small className="btn btn-primary w-100">
                See Similar Items.
              </small>
            </Link>
            <br /> <br />
            <Link href={"/cart"}>
              <small className="btn btn-info w-100">Checkout</small>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
