import { useRouter } from "next/router";

const Project = () => {
  const router = useRouter();
  const { project } = router.query;
  console.log(project)
  return <div>Project: {project}</div>;
};

export default Project;
