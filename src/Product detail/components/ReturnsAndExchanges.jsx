import React from "react";
import styles from "./Product.module.css";

const ReturnsAndExchanges = () => {
  return (
    <div>
      <div className={styles.info}>
        <p>
          This item can’t be returned — our Returns Policy doesn’t cover
          innerwear, lingerie, fragrances and beauty products.
        </p>
      </div>
    </div>
  );
};

export default ReturnsAndExchanges;
