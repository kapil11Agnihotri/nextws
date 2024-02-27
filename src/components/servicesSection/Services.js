import React from "react";
import styles from "./Services.module.css";
import ServicesCard from "./ServicesCard";
import Button from "../Button/Button";

const Services = ({ data }) => {
  const colors = [
    "#199696",
    "#289664",
    "#0A78BE",
    "#F06919",
    "#DC373C",
    "#874B91",
  ];

  return (
    <section className={styles.businessToolsSection}>
      <div style={{ height: "70px" }}></div>
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionHeading}>OUR SOLUTIONS</h2>
        <p className={styles.sectionContent}>
          Take a closer look at the solutions we offer.
        </p>
      </div>
      <div style={{ height: "20px" }}></div>
      <div className={styles.cardSection}>
        <div className={styles.cardParent}>
          {data.map((data, index) => (
            <div
              key={index}
              className={styles.cards}
            >
              <ServicesCard
                cardHeading={data?.title}
                cardContent={data?.short_description}
                detailsLink={data?.slug}
                colors={colors[index]}
              />
            </div>
          ))}
        </div>
        <div style={{ height: "20px" }} />
        <hr />
        <div className={styles.button}>
          <Button
            id='seeAllProducts'
            link={"products"}
            text={"See All Products"}
            color={"dark"}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
