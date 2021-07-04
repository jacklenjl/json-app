import React from "react";

const ArrayView = (props) => {
  console.log("props", props);
  let dataType = props.objType;
  let test = props.jsonData;
  let finalArr = [];
  test.map((arrTest) => {
    let jsonOutView = Object.keys(arrTest).map((x, index) => {
      return (
        <table key={index}>
          <tbody>
            <tr>
              <td className="objKey">
                <div contentEditable={false}>{x}</div>
              </td>
              <td>:</td>
              <td className="jsonVal">
                <div contentEditable={false}>{arrTest[x]}</div>
              </td>
            </tr>
          </tbody>
        </table>
      );
    });
    finalArr.push(jsonOutView);
  });

  return (
    <div>
      {dataType ? <div className="dataType">DataType: {dataType}</div> : ""}
      {finalArr}
    </div>
  );
};

export default ArrayView;
