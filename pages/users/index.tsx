import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import styles from "../../styles/Users.module.css";

const User = (props: any) => {
  const { data } = props;
  const router = useRouter();

  return (
    <Layout pageTitle="User Page">
      <h1>User List Page</h1>
      {data.map((user: any) => (
        <div
          key={user.id}
          onClick={() => router.push(`/users/${user.id}`)}
          className={styles.card}
        >
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </Layout>
  );
};

export default User;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
