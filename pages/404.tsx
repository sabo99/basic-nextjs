import { useRouter } from "next/router";
import { useEffect } from "react";

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);
  return (
    <div>
      <h1 className="title-not-found">Oops...</h1>
      <h1 className="title-not-found">Page Not Found</h1>
    </div>
  );
};

export default Custom404;
