import { Router, useRouter } from "next/router";

const portfolioProjectPage = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return <div>포트폴리오 프로젝트 페이지</div>;
};

export default portfolioProjectPage;
