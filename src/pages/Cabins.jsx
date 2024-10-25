import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

// import { useEffect } from "react";
// import { getCabins } from "../services/apiCabins";

function Cabins() {
  // useEffect(function () {
  //   getCabins().then((data) => console.log(data));
  // }, []);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>

        {/* <img src="https://gmmxprbqcaxwnjnjeoeg.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg" /> */}
      </Row>
      <Row>
        <CabinTable />
      </Row>
    </>
  );
}

export default Cabins;
