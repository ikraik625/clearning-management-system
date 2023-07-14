import React from "react";
import "./Step1.css";
import "./Step4.css";

export default function Step4({
  coupon,
  appliedCouponCode,
  handleCouponChange,
  applyCoupon,
  couponDiscount,
  handleNextStep,
  handleBackStep,
}) {
  return (
    <>
      <label>Step 4: Coupon Code</label>
      <div className="input-and-apply-container">
        <input
          type="text"
          id="coupon"
          name="coupon"
          value={coupon}
          onChange={handleCouponChange}
        />
        <button
          type="button"
          className="appliquer-button"
          onClick={applyCoupon}
        >
          Appliquer
        </button>
      </div>
      <button type="button" className="next-button" onClick={handleNextStep}>
        Suivant
      </button>
      <button type="button" className="back-button" onClick={handleBackStep}>
        précédent
      </button>
    </>
  );
}
