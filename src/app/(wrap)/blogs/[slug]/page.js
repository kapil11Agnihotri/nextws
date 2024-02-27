
import { get_blog_by_slug } from "@/backend/models/blogModel";
import styles from "./BlogDetails.module.css";
import Image from "next/image";
import moment from "moment";

// Blog details page component
const BlogDetails = async ({ params }) => {
  // Destructure slug from params
  const { slug } = params;
  // Call API to get blog data by slug
  const response = await get_blog_by_slug(slug);
  const blogData = response?.data;


  // Render blog details
  return (
    <div className={styles.blogDetailPage}>
      {/* Blog title and meta data */}
      <div className={styles.blogDetailUpper}>
        {/* Blog title */}

        <div
          style={{
            display: "flex",
          }}
        >
          <div className={styles.contentBlogDate}>
            {moment(new Date(blogData?.publish_date)).format("MMMM DD, YYYY")}
          </div>
          <div
            style={{ marginLeft: "5px" }}
            className={styles.contentBlogDate}
          >{`| ${blogData?.category}`}</div>
        </div>
        <h1 className={styles.blogHeading}>{blogData?.title}</h1>
        {/* Blog short description */}
        {/* <div className={styles.shortDesc}>
         
          <div className={styles.shortDescLeft}>
            <span className={styles.readTime}>5 min read</span>
          </div>
          
        </div> */}
        {/* Blog content section */}
        <div className={styles.blogSection}>
          {/* Featured image */}
          <Image
            src={
              process.env.NEXT_PUBLIC_IMAGES_URL +
              `/blogs/${blogData?.featured_image}`
            }
            height={600}
            width={600}
            alt="blogImg"
            className={styles.blogImg}
          />
          {/* Blog content */}
          <div
            className={styles.blogContent}
            dangerouslySetInnerHTML={{
              __html: `${blogData?.description}`,
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default BlogDetails;
