import React from "react";
import { format } from "date-fns";
import clsx from "clsx";

import styles from "./BlogHero.module.css";

type BlogHeroTypes = React.HTMLAttributes<HTMLHeadElement> & {
  title: string;
  publishedOn: Date;
  className?: string;
};

function BlogHero({
  title,
  publishedOn,
  className,
  ...delegated
}: BlogHeroTypes) {
  const humanizedDate = format(new Date(publishedOn), "MMMM do, yyyy");

  return (
    <header
      className={clsx(styles.wrapper, className)}
      {...delegated}
    >
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>
          Published on{" "}
          <time dateTime={publishedOn.toISOString()}>{humanizedDate}</time>
        </p>
      </div>
    </header>
  );
}

export default BlogHero;
