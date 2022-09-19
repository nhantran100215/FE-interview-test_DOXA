/* eslint-disable no-unused-expressions */
import React from "react";
import input1Difference from "./fileInput/findDifferenceEleFile/input1File.json";
import input2Difference from "./fileInput/findDifferenceEleFile/input2File.json";
import input1ThesameAs from "./fileInput/findTheSameAs/input1File.json";
import input2ThesameAs from "./fileInput/findTheSameAs/input2File.json";
import inputConvertExcel from "./fileInput/convertToExcel/inputFile.json"
import inputConvertJson from "./fileInput/converttoJson/input.json"
function App() {

  const findDifferentElement = () =>{
    let resultJson={};
    for (const input1ele in input1Difference){
      let check = false
      for (const input2ele in input2Difference){
        if (input1ele===input2ele) check=true;
      }
      if (!check){
        resultJson[input1ele]=input1Difference[input1ele];
      }else check=false;
    }
    console.log("findDifferentElement",resultJson);
  }

  const findTheSameAsElement = () =>{
    let resultJson={};
    // input1ThesameAs is from local
    for (const input1ele in input1ThesameAs){
      for (const input2ele in input2ThesameAs){
        if (input1ele===input2ele) resultJson[input1ele]=input2ThesameAs[input2ele];
        else if(input1ThesameAs[input1ele]===input2ele) resultJson[input1ele]=input2ThesameAs[input2ele];
      }
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

  const convertExceltoJson = () => {
    // const {EN,untranslated_words_entity,untranslated_words_p2p} = inputConvertJson;
    // ["Additional_untranslated words"]
    let result={Mandarin:{},Bahasa:{},total:0,MandarinLength:0,BahasaLength:0,MandarinMissCount:0,BahasaMissCount:0};
    // Madarin
    for (let ele in inputConvertJson){
      result.total+=inputConvertJson[ele].length;
      inputConvertJson[ele].forEach(element => {
        // for (let ele1 in input1Json){
        //   if(element?.Label?.slice(0, -1)===input1Json[ele1]){
        //     result.Mandarin[ele1]=element["Value (To be translated) - Chinese "];
        //   }
        // }
        result.Mandarin[element.Label?.slice(0, -1)]=element["Value (To be translated) - Chinese "];
        if(element["Value (To be translated) - Chinese "]!==undefined)
        {
          result.Mandarin[element.Label?.slice(0, -1)]=element["Value (To be translated) - Chinese "];
          result.MandarinLength++;
        }else {
          // console.log("MandarinMissCount",element);
          result.MandarinMissCount ++;
        }
        if(element["Value (To be translated) - Bahasa Indonesia "]!==undefined)
        {
          result.Bahasa[element.Label?.slice(0, -1)]=element["Value (To be translated) - Bahasa Indonesia "];
          result.BahasaLength++;
        }else {
          // console.log("BahasaMissCount",element)
          result.BahasaMissCount ++;
        }
      });
    }
    console.log("createJsonConvertExcel",result)
  }

  return (
    <>
    <button style={{padding : "5px",margin: "10px", border: "1px solid grey"}} onClick={findDifferentElement}>findDifferentElement</button>
    <button style={{padding : "5px",margin: "10px", border: "1px solid grey"}} onClick={findTheSameAsElement}>findTheSameAsElement</button>
    <button style={{padding : "5px",margin: "10px", border: "1px solid grey"}} onClick={createJsonConvertExcel}>createJsonConvertExcel</button>
    <button style={{padding : "5px",margin: "10px", border: "1px solid grey"}} onClick={convertExceltoJson}>convertExceltoJson</button>
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
