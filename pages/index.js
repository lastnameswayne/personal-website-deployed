import Link from "next/link";
import fs from "fs";
const Home = ({ slugs }) => (
  <div className="container">
    {slugs.map((slug) => {
      return (
        <Link key={slug} href={'/blog/'+slug}>
          <a>adas</a>
        </Link>
      );
    })}
  </div>
);

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  return {
    props: {
      slugs: files.map((filename) => filename.replace(".md", "")),
    },
  };
};
export default Home;
