import Layout from "../../components/Layout";

const UserDetail = (props: any) => {
  const { data } = props;

  return (
    <Layout pageTitle="User Detail">
      <p>{data.name}</p>
      <p>{data.email}</p>
      <p>{data.phone}</p>
      <p>{data.website}</p>
    </Layout>
  );
};

export default UserDetail;

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((user: any) => ({
    params: {
      id: `${user.id}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
