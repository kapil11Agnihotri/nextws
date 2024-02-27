import React from "react";
import styles from "./ProductCard.module.css";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ image, heading, content, link }) => {
  return (
    <div className={styles.productCard}>
      <Image
        className={styles.cardImg}
        src={image}
        height={500}
        width={500}
        alt='Product Card'
      />

      <h3 className={styles.cardHeading}>{heading}</h3>
      <p className={styles.cardContent}>{content.slice(0, 150) + "..."}</p>
      <div className={styles.link}>
        <Link
          id={`learnMore_${heading}`}
          href={`products/${link}`}
          className={styles.linkBtn}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
