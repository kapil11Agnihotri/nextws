import React from 'react';
import styles from '../ServicesDetail.module.css';
import Image from 'next/image';
import Details from './Details';
import { get_service_by_slug } from '@/backend/models/serviceModel';
import { logging } from '../../../../../next.config';

const Page = async ({ params }) => {
  const { slug } = params;
  const response = await get_service_by_slug(slug);
  const data = response?.data;
  
  return (
    <>
      <div className={styles.serviceDetail}>
        <div className={styles.servicesDetailBanner}>
          <div className={styles.bannerLeft}>
            <h2 className={styles.bannerHeading}>
              {data?.title}
            </h2>
            <p className={styles.bannerText}>
            {data?.short_description}
            </p>
          </div>
          <div className={styles.bannerRight}>
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/services/${data?.featured_image}`}
              alt='servicesBannerImg'
              className={styles.bannerImg}
              height={1000}
              width={1000}
            />
          </div>
        </div>

        <Details detailsData = {JSON?.parse(data?.description)}/>

        
      </div>
    </>
  );
};

export default Page;
