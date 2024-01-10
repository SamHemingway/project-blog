import React from "react";
import BlogSummaryCard from "@/components/BlogSummaryCard";
import styles from "./homepage.module.css";

function Home(): React.ReactNode {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>

      <BlogSummaryCard
        slug="example"
        title="Hello world!"
        abstract="This is a placeholder, an example which shows how the “BlogSummaryCard” component should be used. You'll want to swap this out based on the data from the various MDX files!"
        publishedOn={new Date()}
      />
    </div>
  );
}

export default Home;
