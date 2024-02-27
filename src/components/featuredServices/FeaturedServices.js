"use client";
import React from "react";
import styles from "./FeaturedServices.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FeaturedServices =  ({ data }) => {
  const pathname = usePathname();
  return (
    <>
      <div className={styles.featuredServices}>
        <h2 className={styles.featuredHeading}>
          FEATURED {pathname.slice(1, pathname.length).toLocaleUpperCase()}
        </h2>
        <p className={styles.headingText}>
          Explore developer solutions and cross-product integrations from
          Webanix.
        </p>
        <div className={styles.cardsList}>
          {data.map((card, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.cardUpper}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/services/${card?.featured_image}`}
                  height={500}
                  width={500}
                  alt={card?.alt}
                  className={styles.cardImg}
                />
              </div>
              <div className={styles.cardLower}>
                <h3 className={styles.cardHeading}>{card?.title}</h3>
                <p className={styles.cardText}>{card?.short_description}</p>
                <div className={styles.cardIcons}>
                  {JSON.parse(card?.tech_images || "[]").map((icon, index) => (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/services/${icon?.image}`}
                      height={50}
                      width={50}
                      alt={icon?.alt}
                      key={index}
                      className={styles.cardIcon}
                    />
                  ))}
                </div>
                <Link
                  id={`learnMoreServiceButton_${index}`}
                  href={`${pathname}/${card?.slug}`}
                  className={styles.learnMoreBtn}
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedServices;
