'use strict';

const validateString = (cad)=>{
    //Ternario -> abreviación del if else
    let response = (cad.length>=3) ? true : false;
    return response;
}

const validacionAvg=(num)=>{
    let response = (num>=0 && num<=5) ? true : false;
    return response;
}

const checkAvg=(value)=>{
    let result = (value>=3 && value<=5) ? "APROBADO" : "REPROBADO";
    return result;
}





export { validateString, validacionAvg as vAvg, checkAvg}


