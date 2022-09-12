import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "manu", name: "manuel" },
  ];

  return (
    <div>
      <h1>클라이언트 페이지</h1>
      <ul>
        {/* //pages폴더의 clients, 중괄호가 있는 [id]폴더로 이동하여
        // index.js에 도달한다. */}
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{ pathname: "/clients/[id]", query: { id: client.id } }}
            >
              {client.name}
            </Link>
          </li>
        ))}
        {/* 아래와 같이 사용할 수도 있다.
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))} */}
      </ul>
    </div>
  );
}

export default ClientsPage;
