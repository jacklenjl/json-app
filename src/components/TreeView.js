import React from "react";
import { uuid } from 'uuidv4';
const TreeView = (props) => {
  console.log("props", props);
  let dataType = props.objType;
  let test = props.jsonData;
  let finalArr = [];
  let arrTemp = [];
  function resursiveJson(test) {
    for (let prop in test) {
      if (typeof test[prop] === "object") {
        arrTemp.push(
          <div key={uuid()} contentEditable={false} style={{paddingLeft:"15%"}}>
            Object: {prop}
          </div>
        );
        resursiveJson(test[prop]);
      } else {
        arrTemp.push(
          <div style={{paddingLeft:"15%"}}>
          <table key={uuid()} >
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
          </div>
        );
      }
    }
  }

  if(dataType!=='Array'||dataType==='boolean'||dataType==='string'||dataType==='number'||dataType==='object')
  { 
    if(dataType==='object')
    {
      resursiveJson(test)
    }else
    arrTemp.push(
      <div key={uuid()} contentEditable={false}>
    Object: {String(test)}
    </div>
    )
  }else{
    test.map((arrTest, index) => {
      arrTemp.push(
        <div key={uuid()} contentEditable={false} style={{paddingLeft:"10%"}}>
          Index: {index}
        </div>
      );
      resursiveJson(arrTest)
     });
  }
  
  finalArr = arrTemp;
  return (
    <div>
      {dataType ? <div className="dataType">DataType: {dataType}</div> : ""}
      {finalArr}
    </div>
  );
};

export default TreeView;
