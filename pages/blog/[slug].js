import { React } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from 'marked';
import Head from 'next/head'

const Post = ({ htmlString, data }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div dangerouslySetInnerHTML={{__html: htmlString}}>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts"); //returns array of strings of filesname in the posts folder
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdown = fs.readFileSync(path.join("posts", slug + ".md")).toString();
  const parsedMarkdown = matter(markdown);

  const htmlString = marked(parsedMarkdown.content)
  return {
    props: {
      htmlString,
      data: parsedMarkdown.data,
    },
  };
};

export default Post;
