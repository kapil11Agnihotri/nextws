"use client";
import React from "react";
import styles from "./ServicesList.module.css";
import Image from "next/image";
import Button from "../Button/Button";
import { usePathname } from "next/navigation";

const ServicesList = ({ data }) => {
  const pathname = usePathname();
  return (
    <>
      <div className={styles.servicesList}>
        <h2 className={styles.servicesListHeading}>
          OUR {pathname.slice(1, pathname.length).toLocaleUpperCase()}
        </h2>
        <p className={styles.headingText}>
          Select your development focus to find helpful solutions and resources.
        </p>

        <div className={styles.servicesCardsList}>
          {data?.map((card, index) => (
            <div
              className={styles.servicesCard}
              key={index}
            >
              <h3 className={styles.cardHeading}>{card?.title}</h3>
              <p className={styles.cardContent}>
                {card?.short_description.slice(0, 100) + "..."}
              </p>
              <div className={styles.cardIcons}>
                {JSON.parse(card?.tech_images || "[]")?.map((icon, index) => (
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

              <Button
                id={`learnMoreOurServicesButton_${index}`}
                text='Learn More'
                link={`${pathname.slice(1, pathname.length)}/${card?.slug}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesList;
