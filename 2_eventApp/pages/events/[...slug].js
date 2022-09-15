import { useRouter } from "next/router";

const FilteredEventsPage = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  console.log(filterData);
  return (
    <div>
      <h1>Filtered Events</h1>
    </div>
  );
};

export default FilteredEventsPage;
