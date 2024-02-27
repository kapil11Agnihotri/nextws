"use client";
import React, { useState } from "react";
import styles from "./LatestNews.module.css";
import Image from "next/image";
import Button from "../Button/Button";
import Link from "next/link";
import moment from "moment";

const LatestsSection = ({ newsData }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHeadingHover = (index) => {
    setHoveredIndex(index);
  };

  const handleHeadingLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <div className={styles.latestsSection}>
        <h2 className={styles.mainHeading}>LATEST BLOGS</h2>

        <div className={styles.latestsList}>
          {newsData?.map((latest, index) => (
            <div
              key={index}
              className={styles.latest}
              onMouseEnter={() => handleHeadingHover(index)}
              onMouseLeave={handleHeadingLeave}
            >
              <Link
                id={`latestBlogsButton_${index}`}
                href={`/blogs/${latest?.slug}`}
                style={{ textDecoration: "none" , width: '100%'}}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/blogs/${latest?.featured_image}`}
                    alt={`${latest?.alt}`}
                    width={500}
                    height={200}
                  />
                </div>

                <div className={styles.textContainer}>
                  <h3
                    className={`${styles.heading} ${
                      hoveredIndex === index ? styles.hovered : ""
                    }`}
                  >
                    {latest?.title}
                  </h3>
                  <p className={styles.date}>
                    {moment(new Date(latest?.publish_date)).format(
                      "MMMM DD, YYYY"
                    )}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div>
          <hr />
          <div className={styles.button}>
            <Button
              id='seeMoreNewsButton'
              link='blogs'
              text='See More Blogs'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestsSection;
