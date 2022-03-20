import Layout from "../../components/Layout";
import styles from "../../styles/Blog.module.css";

const Blog = (props: any) => {
  const { data } = props;
  return (
    <Layout pageTitle="Blog Page">
      <h1>Blog Page</h1>
      {data.map((blog: any) => {
        return (
          <div key={blog.id} className={styles.card}>
            <h3 style={{ fontWeight: "bold" }}>{blog.title}</h3>
            <p>{blog.body}</p>
          </div>
        );
      })}
    </Layout>
  );
};

export default Blog;

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
