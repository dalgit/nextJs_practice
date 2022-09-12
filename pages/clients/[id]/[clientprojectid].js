import { useRouter } from "next/router";

function SelectedClientProjectPage() {
  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h1>해당 클라이언트와의 특정 프로젝트에 대한 페이지</h1>
    </div>
  );
}

export default SelectedClientProjectPage;
