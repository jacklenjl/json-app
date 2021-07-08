// import logo from './logo.svg';
import "./App.css";
import { Button, Input, Row, Col, Label } from "reactstrap";
import { useState } from "react";
import JsonObjView from "./components/JsonObjView";
import ArrayView from "./components/ArrayView";
function App() {
  const [textAreaOne, setTextOne] = useState("");
  const [dataType, setDataType] = useState("");
  const [finalJson, setJsonFinal] = useState("");

  let jsonParseEt = () => {
    if (!textAreaOne) {
      alert("Please add input");
      return;
    }
    if (textAreaOne) {
      
      try {
        let test = JSON.parse(textAreaOne);
        let typeTest = Array.isArray(test) ? "Array" : "";

        if (!typeTest) typeTest = typeof test;
        
        setDataType(typeTest);
        setJsonFinal(test);
      } catch (e) {
        alert("Error in Json Input");
      }
    }
  };

  let clearEt = () => {
    setTextOne("");
    setDataType("");
    setJsonFinal("");
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <Row>
        <Col md="5">
          <div className="jsonInputCss">
            <Label>
              <b>JSON Input Area:</b>
            </Label>
            <br />
            <Input
              type="textarea"
              value={textAreaOne}
              style={{ height: 420 }}
              onChange={(e) => setTextOne(e.target.value)}
            />
          </div>
        </Col>
        <Col md="2">
          <Button className="jsonParseBtn" color="danger" onClick={jsonParseEt}>
            Json Parse
          </Button>
          <br />
          <Button className="clearBtn" color="danger" onClick={clearEt}>
            Clear
          </Button>
        </Col>
        <Col md="5">
          <div className="jsonOutputCss">
            <Label>
              <b>JSON Output Area:</b>
            </Label>
            <br />
            <div className="jsonViewer">
              {dataType == "object"||dataType=='boolean'||dataType=='string'||dataType=='number'? (
                <JsonObjView objType={dataType} jsonData={finalJson} />
              ) : (
                ""
              )}
              {dataType == "Array" ? (
                <ArrayView objType={dataType} jsonData={finalJson} />
              ) : (
                ""
              )}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
