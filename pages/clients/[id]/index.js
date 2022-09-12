import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHandler() {
    // load data ...

    // router.push("/clients/max/projecta");
    // //push 메서드는 다른 페이지로 이동해준다.
    // //따라서 link를 이렇게 메서드처럼 사용 가능

    // router.replace("/clients/max/projecta");
    // //현재 페이지를 코드의 페이지로 대체한다.
    // //즉, 페이지 이동 후에는 되돌아갈 수 없다.

    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "pojecta" },
    });
    //
  }

  return (
    <div>
      <h1>해당 클라이언트 프로젝트</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
export default ClientProjectsPage;
