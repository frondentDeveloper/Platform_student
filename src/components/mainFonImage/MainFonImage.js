import React,{useState} from "react"
import "./mainImg.scss"

function MainFonImage(){

    const [backImage, setbackImage] = useState({
        img:"images/bacIMG.png"
    });

    return(
        <div className="main_back_img">
            <div className="bac_style"></div>
            <div className="student_name">talabalar platformasi</div>
            <div className="student_name_2">ANDIJON QISHLOQ XO‘JALIGI VA AGROTEXNOLOGIYALAR INSTITUTI</div>
            <img  src={backImage.img} alt=""/>
        </div>
    )
}

export default MainFonImage;