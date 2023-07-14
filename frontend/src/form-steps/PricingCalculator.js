import React, { useState, useEffect } from "react";

function PricingCalculator({
  selectedService,
  selectedFrequency,
  selectedAddons,
  couponCode, //Changed couponDiscount to couponCode to avoid name collision
}) {
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [addon, setAddon] = useState(0);
  const [couponDiscount, setCouponDiscount] = useState(0); // new state
  const [total, setTotal] = useState(0);

  const calculateSubtotal = () => {
    let newSubtotal = 0;
    if (selectedService === "regular-cleaning") {
      newSubtotal = 30;
    } else if (selectedService === "deep-cleaning") {
      newSubtotal = 40;
    } else if (selectedService === "office-cleaning") {
      newSubtotal = 60;
    } else if (selectedService === "construction-cleaning") {
      newSubtotal = 100;
    }
    setSubtotal(newSubtotal);
  };

  const calculateDiscount = () => {
    let newDiscount = 0;
    if (selectedFrequency === "once") {
      newDiscount = 0;
    } else if (selectedFrequency === "weekly") {
      newDiscount = 30;
    } else if (selectedFrequency === "bi-weekly") {
      newDiscount = 20;
    } else if (selectedFrequency === "monthly") {
      newDiscount = 10;
    }
    setDiscount(newDiscount);
  };

  const calculateAddon = () => {
    let newAddon = 0;
    selectedAddons.forEach((selectedAddon) => {
      if (selectedAddon === "fridge") {
        newAddon += 20;
      } else if (selectedAddon === "cabinet") {
        newAddon += 25;
      } else if (selectedAddon === "windows") {
        newAddon += 20;
      } else if (selectedAddon === "oven") {
        newAddon += 20;
      } else if (selectedAddon === "laundry") {
        newAddon += 10;
      }
    });
    setAddon(newAddon);
  };

  const calculateCouponDiscount = () => {
    let newCouponDiscount = 0;
    if (couponCode === "Free22") {
      newCouponDiscount = 5;
    }
    setCouponDiscount(newCouponDiscount);
  };

  const calculateTotal = () => {
    const discountAmount = (subtotal * discount) / 100;
    const couponDiscountAmount = (subtotal * couponDiscount) / 100;
    const newTotal = subtotal - discountAmount - couponDiscountAmount + addon;
    setTotal(newTotal);
  };

  useEffect(() => {
    calculateSubtotal();
    calculateDiscount();
    calculateAddon();
    calculateCouponDiscount(); // new line
  }, [selectedService, selectedFrequency, selectedAddons, couponCode]);

  useEffect(() => {
    calculateTotal();
  }, [subtotal, discount, couponDiscount, addon]);

  return (
    <div className="pricing-cart">
      <div className="cart-item">
        <span className="item-label">Sous-total:</span>
        <span className="item-value">${subtotal}</span>
      </div>
      <div className="cart-item">
        <span className="item-label">Remise:</span>
        <span className="item-value">{discount}%</span>
      </div>
      <div className="cart-item">
        <span className="item-label">Options séléctionnées:</span>
        <span className="item-value">${addon}</span>
      </div>
      <div className="cart-item">
        <span className="item-label">Coupon code:</span>
        <span className="item-value">{couponDiscount}%</span>
      </div>
      <div className="cart-item">
        <span className="item-label">Total:</span>
        <span className="item-value total-price">${total}</span>
      </div>
    </div>
  );
}

export default PricingCalculator;
