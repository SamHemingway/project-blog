import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import React from "react";

export interface BlogPostFrontmatter {
  title: string;
  abstract: string;
  publishedOn: Date;
}

export interface BlogPost extends BlogPostFrontmatter {
  slug: string;
}

export async function getBlogPostList(): Promise<BlogPost[]> {
  const fileNames = await readDirectory("/content");

  const blogPosts: BlogPost[] = [];

  for (let fileName of fileNames) {
    const rawContent = await readFile(`/content/${fileName}`);

    const frontMatter = matter(rawContent);

    blogPosts.push({
      slug: fileName.replace(".mdx", ""),
      ...(frontMatter.data as BlogPostFrontmatter),
    });
  }

  return blogPosts.sort((p1, p2) => (p1.publishedOn < p2.publishedOn ? 1 : -1));
}

export const loadBlogPost = React.cache(async (slug: string) => {
  const rawContent = await readFile(`/content/${slug}.mdx`);

  const { data: frontmatter, content } = matter(rawContent);

  return { frontmatter, content };
});

function readFile(localPath: string) {
  return fs.readFile(path.join(process.cwd(), localPath), "utf8");
}

function readDirectory(localPath: string) {
  return fs.readdir(path.join(process.cwd(), localPath));
}
