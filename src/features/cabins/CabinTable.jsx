/* eslint-disable no-unused-vars */
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";

function CabinTable() {
  const [searchParams] = useSearchParams();

  const { isLoading, cabins } = useCabins();

  if (isLoading) return <Spinner />;
  if (!cabins?.length) return <Empty resource="Cabins" />;

  const filterValue = searchParams.get("discount") || "all";

  let filteredCabins = cabins;
  if (filterValue === "no-discount")
    filteredCabins = filteredCabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === "with-discount")
    filteredCabins = filteredCabins.filter((cabin) => cabin.discount > 0);

  // 2) sorting
  const sortBy = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortBy.split("-");
  console.log(field, direction);

  // name special case since string comparison with js sucks
  let sortedCabins = filteredCabins;
  if (field === "name") {
    sortedCabins =
      direction === "asc"
        ? sortedCabins.sort((a, b) => (b.name > a.name ? -1 : 1))
        : sortedCabins.sort((a, b) => (a.name > b.name ? -1 : 1));
  } else {
    // TODO: date comparison for creation date
    sortedCabins = filteredCabins.sort((a, b) =>
      direction === "asc" ? a[field] - b[field] : b[field] - a[field]
    );
  }
  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header role="row">
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
