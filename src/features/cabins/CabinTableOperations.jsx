import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

export default function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField={"discount"}
        options={[
          {
            value: "all",
            label: "All",
          },
          {
            value: "no-discount",
            label: "No Discount",
          },
          {
            value: "with-discount",
            label: "With Discount",
          },
        ]}
      />
      <SortBy
        options={[
          {
            value: "name-asc",
            label: "Sort by name (A-Z)",
          },
          {
            value: "name-desc",
            label: "Sort by name (Z-A)",
          },
          {
            value: "regularPrice-asc",
            label: "Sort by price (low)",
          },
          {
            value: "regularPrice-desc",
            label: "Sort by price (high)",
          },
          {
            value: "maxCapacity-asc",
            label: "Sort by capacity (low)",
          },
          {
            value: "maxCapacity-desc",
            label: "Sort by capacity (high)",
          },
          {
            value: "created_at-asc",
            label: "Sort by creation date (low)",
          },
          {
            value: "created_at-desc",
            label: "Sort by creation date (high)",
          },
        ]}
      />
    </TableOperations>
  );
}
