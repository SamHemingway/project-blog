import React from "react";
import BlogHero from "@/components/BlogHero";
import styles from "./postSlug.module.css";
import { MDXRemote } from "next-mdx-remote/rsc";
import { loadBlogPost } from "@/helpers/file-helpers";
import { Metadata } from "next";
import CodeSnippet from "@/components/CodeSnippet";
import DivisionGroupsDemo from "@/components/DivisionGroupsDemo";
import CircularColorsDemo from "@/components/CircularColorsDemo";

interface BlogPostType {
  params: { postSlug: string };
}

interface metadataProps {
  params: { postSlug: string };
}

export async function generateMetadata({
  params,
}: metadataProps): Promise<Metadata> {
  const { postSlug } = params;

  const post = await loadBlogPost(postSlug);

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.abstract,
  };
}

async function BlogPost({ params }: BlogPostType) {
  const { postSlug } = params;

  const post = await loadBlogPost(postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={post.frontmatter.title}
        publishedOn={post.frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote
          source={post.content}
          components={{
            pre: CodeSnippet,
            DivisionGroupsDemo,
            CircularColorsDemo,
          }}
        />
      </div>
    </article>
  );
}

export default BlogPost;
