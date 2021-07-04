import React from "react";
const JsonObjView = (props) => {
  console.log("props", props);
  let dataType = props.objType;
  let test = props.jsonData;

  let JsonRender = (props) => {
    let test = props.test;

    let jsonOutView = Object.keys(test).map((x, index) => {
      return (
        <table key={index}>
          <tbody>
            <tr>
              <td className="objKey">
                <div contentEditable={false}>{x}</div>
              </td>
              <td>:</td>
              <td className="jsonVal">
                <div contentEditable={false}>{test[x]}</div>
              </td>
            </tr>
          </tbody>
        </table>
      );
    });

    return jsonOutView;
  };

  return (
    <div>
      {dataType ? <div className="dataType">DataType: {dataType}</div> : ""}
      <JsonRender test={test} />
    </div>
  );
};

export default JsonObjView;
