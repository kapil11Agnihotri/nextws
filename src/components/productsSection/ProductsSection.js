import React from "react";
import styles from "./ProductsSection.module.css";
import ProductCard from "./ProductCard";


const imagesData = [
  {
    image: "/association.svg",
  },
  {
    image: "/construction.svg",
  },
  {
    image: "/task.svg",
  },
  {
    image: "/ccm.svg",
  },
];

const ProductsSection = ({productsData}) => {
  return (
    <div className={styles.wholeProductsSection}>
      <div className={styles.productsSection}>
        <div className={styles.productsHeading}></div>
        <h2 className={styles.mainHeading}>OUR PRODUCTS</h2>
        <p className={styles.headingText}>
        Industry-specific Software Solutions.
        </p>
      </div>
      <div className={styles.productsSpaceUpper}></div>
      <div className={styles.productsCardList}>
        {productsData?.map((product, index) => (
          <div key={product?.id} className={styles.card}>
            <ProductCard
              image={imagesData[index]?.image}
              heading={product?.title}
              content={product?.short_description}
              link={product?.slug}
            />
          </div>
        ))}
      </div>
      <div className={styles.productSpaceBottom}></div>
    </div>
  );
};

export default ProductsSection;
