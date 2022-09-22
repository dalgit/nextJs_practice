function UserProfilePage(props) {
  return <h1>{props.username}</h1>;
}

export default UserProfilePage;

/*
getStaticProps의 context와 같이
요청(req)객체와 응답(res)객체에도 접근가능
따라서 특수 헤더나 쿠키데이터 접근가능
*/
export async function getServerSideProps(context) {
  const { params, req, res } = context;

  return {
    props: {
      username: "Max",
    },
  };
}
