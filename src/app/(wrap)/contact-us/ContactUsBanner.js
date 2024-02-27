import React from "react";
import styles from "../../../components/servicesBanner/ServicesBanner.module.css";
import Image from "next/image";
const ContactUsBanner = async ({ data }) => {
  return (
    <div className={styles.servicesBanner}>
      <div className={styles.bannerUpper}>
        <div className={styles.bannerLeft}>
          <h2 className={styles.bannerHeading}>{data[0]?.heading}</h2>
          <div
            className={styles.bannerText}
            dangerouslySetInnerHTML={{ __html: data[0]?.content }}
          />
        </div>
        <div className={styles.bannerRight}>
          <Image
            src={data[0]?.featured_image}
            height={1000}
            width={1000}
            alt='contact-us-banner'
            className={styles.bannerImg}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUsBanner;
