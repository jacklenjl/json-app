import React from "react";
const JsonObjView = (props) => {
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
  if(typeof(test)=='object')
  resursiveJson(test);
  else{
    arrTemp.push(
      <div key={'test'} contentEditable={false}>
    Object: {String(test)}
    </div>
    )
    
  }
  finalArr = arrTemp;
  

  return (
    <div className="jsonObj">
      {dataType ? <div className="dataType">DataType: {dataType}</div> : ""}
      {finalArr}
    </div>
  );
};

export default JsonObjView;
