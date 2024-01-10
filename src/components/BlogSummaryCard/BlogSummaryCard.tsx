import React from "react";
import Link from "next/link";
import { format } from "date-fns";

import Card from "@/components/Card";

import styles from "./BlogSummaryCard.module.css";

interface BlogSummaryCardTypes {
  slug: string;
  title: string;
  publishedOn: Date;
  abstract: string;
}

function BlogSummaryCard({
  slug,
  title,
  publishedOn,
  abstract,
}: BlogSummaryCardTypes) {
  const href = `/${slug}`;
  const humanizedDate = format(new Date(publishedOn), "MMMM do, yyyy");

  return (
    <Card className={styles.wrapper}>
      <Link
        href={href}
        className={styles.title}
      >
        {title}
      </Link>
      <time dateTime={publishedOn.toISOString()}>{humanizedDate}</time>
      <p>
        {abstract}{" "}
        <Link
          href={href}
          className={styles.continueReadingLink}
        >
          Continue reading <span className={styles.arrow}>→</span>
        </Link>
      </p>
    </Card>
  );
}

export default BlogSummaryCard;
