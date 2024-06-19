import React from "react";
import {Link} from 'react-router-dom';


function Main(props){

    return(
        <div>
        <h3>메인화면입니다.</h3>
        <ul>
            <Link to="page/1"><li>1번페이지요</li></Link>
            <Link to="page/2"><li>2번페이지요</li></Link>
        </ul>
        </div>
    );
}




export default Main;