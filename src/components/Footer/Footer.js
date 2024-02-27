"use client";
import React, { useState } from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Button from "../Button/Button";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className={styles.footer1}>
        <div className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.imageContainer}>
              <Link href='/'>
                <Image
                  src='/logo.webp'
                  alt='Follow Us Image'
                  width={200}
                  height={200}
                />
              </Link>
            </div>

            <div className={styles.followUsSection}>
              <h2 className={styles.mainHeading}>Follow Us</h2>
              <div className={styles.socialMediaLinks}>
                <a
                  target='_blank'
                  href='https://www.linkedin.com/company/webanix/'
                  id='linkedin'
                  className={styles.socialLink}
                >
                  <FaLinkedin />
                </a>
                <a
                  target='_blank'
                  href='https://www.instagram.com/webanix/'
                  id='instagram'
                  className={styles.socialLink}
                >
                  <FaInstagram />
                </a>
                {/* <a
                  target='_blank'
                  href='#'
                  id='youtube'
                  className={styles.socialLink}
                >
                  <FaYoutube />
                </a> */}
                {/* <a
                  target='_blank'
                  href='#'
                  id='twitter'
                  className={styles.socialLink}
                >
                  <FaXTwitter />
                </a> */}
                
              </div>
            </div>
          </div>
          <div className={styles.detail}>
            <div className={styles.productsSection}>
              <Link
                href={`/products`}
                style={{ textDecoration: "none" }}
              >
                <h2 className={styles.mainHeading1}>Products</h2>
              </Link>
              <div className={styles.productCategories}>
                <Link
                  href='/products/association-management-system/'
                  id='artificial_intelligence'
                  className={styles.productCategory}
                >
                  Association Management Software
                </Link>
                <Link
                  href='/products/hotel-management-software/'
                  id='artificial_intelligence'
                  className={styles.productCategory}
                >
                  Hotel Management Software
                </Link>
                <Link
                  href='/products/task-management-system/'
                  id='ar_vr'
                  className={styles.productCategory}
                >
                  Task Management Software
                </Link>
                <Link
                  href='/products/construction-management-software/'
                  id='business_tools'
                  className={styles.productCategory}
                >
                  Construction Management Software
                </Link>
              </div>
            </div>
            <div className={styles.section1}>
              <div className={styles.programsSection}>
                <Link
                  href={`/services`}
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <h2 className={styles.mainHeading1}>Services</h2>
                </Link>
                <div className={styles.programLinks}>
                  <Link
                    href='/services/seo-consultation'
                    id='threat_exchange'
                    className={styles.programLink}
                  >
                    SEO
                  </Link>
                  <Link
                    href='/services/social-media-marketing'
                    id='threat_exchange'
                    className={styles.programLink}
                  >
                    SMM
                  </Link>
                  <Link
                    href='/services/email-marketing'
                    id='threat_exchange'
                    className={styles.programLink}
                  >
                    Email Marketing
                  </Link>
                </div>
              </div>
            </div>

            <div className={styles.section2}>
              <div className={styles.newsSection}>
                <h2 className={styles.mainHeading1}>News</h2>
                <div className={styles.newsLinks}>
                  <Link
                    href='/blogs/'
                    id='blogs'
                    className={styles.newsLink}
                  >
                    Blogs
                  </Link>
                </div>
              </div>

             
            </div>
          </div>
        </div>
        <div className={styles.hr}>
          <hr />
        </div>

        <div className={styles.content}>
          <div className={styles.additionalContent}>
            <p>© 2024 Webanix</p>
          </div>
          <div className={styles.additionalLinks}>
            <Link
              id='about'
              href='/about-us/'
            >
              About
            </Link>
            <Link
              id='products'
              href='/products/'
            >
              Products
            </Link>
            <Link
              id='services'
              href='/services/'
            >
              Services
            </Link>
            <Link
              id='blog'
              href='/blogs/'
            >
              Blogs
            </Link>
            <Link
              id='contact'
              href='/contact-us/'
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
