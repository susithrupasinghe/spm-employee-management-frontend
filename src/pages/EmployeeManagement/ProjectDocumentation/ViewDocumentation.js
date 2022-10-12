import { useEffect, useState } from "react";
import { Input, AutoComplete } from "antd";
import axios from "axios";

// function getRandomInt(max, min = 0) {
//   return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
// }

// const searchResult = (query) =>
//   new Array(getRandomInt(5))
//     .join(".")
//     .split(".")
//     .map((item, idx) => {
//       const category = `${query}${idx}`;
//       return {
//         value: category,
//         label: (
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//             }}
//           >
//             <span>
//               Found {query} on{" "}
//               <a
//                 href={`https://s.taobao.com/search?q=${query}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {category}
//               </a>
//             </span>
//             <span>{getRandomInt(200, 100)} results</span>
//           </div>
//         ),
//       };
//     });

const ViewEmployeeForm = () => {
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  // const [data, setData] = useState();
  // // const [table, setTable] = useState("");

  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:5000/api/documentation/readDocmentationByProject`
      );
      // setIssueList(result.data);
      console.log(result.data);
      // setIsLoaded(true);
    };
    fetchData();
  }, []);

  // const handleSearch = (value) => {
  //   setOptions(value ? searchResult(value) : []);
  // };

  // const onSelect = (value) => {
  //   console.log("onSelect", value);
  // };

  return (
    <div class="row" style={{}}>
      <div class="col-sm-4">
        <h3
          class="card-title"
          style={{ marginLeft: "1rem", marginTop: "5rem" }}
        >
          Project Documentation
        </h3>
        <div class="card" style={{ borderRadius: "15px", marginTop: "5rem" }}>
          <div class="card-body">
            <ul>
              
            </ul>
            {/* <AutoComplete
              dropdownMatchSelectWidth={252}
              style={{
                width: 300,
              }}
              options={options}
              onSelect={onSelect}
              onSearch={handleSearch}
            >
              <Input.Search size="large" placeholder="input here" enterButton />
            </AutoComplete> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const ViewDocumentation = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ViewEmployeeForm />
          </div>
          <div className="col-lg-12">{/* <Header /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default ViewDocumentation;
