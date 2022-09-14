import React from "react";
import input1Json from "./findDifferenceEleFile/input1File.json";
import input2Json from "./findDifferenceEleFile/input2File.json";
import inputConvertExcel from "./convertToExcel/inputFile.json"
function App() {

  const findDifferentElement = () =>{
    let resultJson={};
    for (const input1ele in input1Json){
      let check = false
      for (const input2ele in input2Json){
        if (input1ele===input2ele) check=true;
      }
      if (!check){
        resultJson[input1ele]=input1Json[input1ele];
      }else check=false;
    }
    console.log("findDifferentElement",resultJson);
  }

  const createJsonConvertExcel = () =>{
    let result={NO:[]};
    for (let ele in inputConvertExcel){
      result.NO[result.NO.length] = {
        "label":ele,
        "En":inputConvertExcel[ele],
        "Cn":"",
        "Bahasa":"",
      }
    }
    console.log("createJsonConvertExcel",result)
  }
  return (
    <>
    <button style={{padding : "5px",margin: "10px", border: "1px solid grey"}} onClick={findDifferentElement}>findDifferentElement</button>
    <button style={{padding : "5px",margin: "10px", border: "1px solid grey"}} onClick={createJsonConvertExcel}>createJsonConvertExcel</button>
    </>
  );
}

export default App;

/*
0: "t3_v3axch"
1: "t3_v39msw"
2: "t3_v38d55"
3: "t3_v37a2k"
4: "t3_v37186"

0: "t3_v3axch"
1: "t3_v39msw"
2: "t3_v38d55"
3: "t3_v37a2k"
4: "t3_v37186"

*/
