import './instruction.css'
import React from "react";
import AllPagesPDFViewer from "../pdf/all-pages";
import pdf from '../../assets/prezentacja_dla_druzynowych_2021.pdf';
//import pdf from './document.pdf';


export default function Instruction() {
    return <div id="instruction-main">
        <div className="all-page-container">
            <AllPagesPDFViewer pdf={pdf} />
        </div>
    </div>
}
