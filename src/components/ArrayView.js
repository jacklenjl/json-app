import React from "react";

const ArrayView = (props) => {
  console.log("props", props);
  let dataType = props.objType;
  let test = props.jsonData;
  let finalArr = [];
  let arrTemp = [];
  function resursiveJson(test) {
    for (let prop in test) {
      if (typeof test[prop] == "object") {
        arrTemp.push(
          <div key={prop} contentEditable={false}>
            Object: {prop}
          </div>
        );
        resursiveJson(test[prop]);
      } else {
        arrTemp.push(
          <table key={prop}>
            <tbody>
              <tr>
                <td className="objKey">
                  <div contentEditable={false}>{prop}</div>
                </td>
                <td>:</td>
                <td className="jsonVal">
                  <div contentEditable={false}>{String(test[prop])}</div>
                </td>
              </tr>
            </tbody>
          </table>
        );
      }
    }
  }

  test.map((arrTest, index) => {
    arrTemp.push(
      <div key={index} contentEditable={false}>
        Index: {index}
      </div>
    );
    resursiveJson(arrTest);
  });
  finalArr = arrTemp;
  return (
    <div>
      {dataType ? <div className="dataType">DataType: {dataType}</div> : ""}
      {finalArr}
    </div>
  );
};

export default ArrayView;
