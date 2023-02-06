import { useRouter } from "next/router";

const blogDetails = () => {
  const router = useRouter();
  console.log(router.query.id);
  return (
    <div>
      Hello!
    </div>
  );
};

export default blogDetails;