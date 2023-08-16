import react, { useEffect, useState } from "react";
import axios from "axios";

export function Loading(props){
    return(
        <div className="lds-facebook"><div></div><div></div><div></div></div>
    );
}