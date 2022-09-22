import fs from "fs/promises";
import path from "path";

import Link from "next/link";

function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  //path를 쓰고 join 메서드를 실행하여 readFile이 사용할 수 있는 경로를 구축
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  //사용자를 리디렉션. 페이지 콘텐츠나 컴포넌트 컨텐츠를
  //렌더링 하지 않고, 다른 페이지로 리디렉션
  //데이터 자체가 없을 때
  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  //데이터가 0개
  if (data.products.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}

export default HomePage;
