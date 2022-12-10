import React,{useState} from "react"
import "./department.scss"

function DepartmentUI(){

    const [department, setDepartment] = useState([
        {img:"images/Calendar.png", class:"Dars jadvali", description:" Joriy yildagi barcha kurslar uchun darslar jadvali"},
        {img:"images/Open Door.png", class:"Xonalar joylashuvi", description:" O’quv bo’limlari va ma’muriy bo’lim xodimlarining xonalari joylashuvi"},
        {img:"images/House.png", class:"jaraga uylar", description:" Ijara uchun yaqn atrofdagi yoki arzon narxdagi uylar ro’yxati"},
        {img:"images/Job Seeker.png", class:"Bo’sh ish o’rinlari", description:" Institutdagi va hamkor tashkilotlardagi maavjud ish vakansiyalari"},
        {img:"images/Cafe.png", class:"Oshxona va kafelar", description:" Atrofdagi arzon oshxona va kafelarning joylashuvi va narxlari"},
        {img:"images/Study.png", class:"To’garaklar ro’yxati", description:" Institutdagi bepul va pullik to’garaklarning ro’yxati"},
        {img:"images/Course.png", class:"Kutubxona", description:" O’quv qollanmalari, darsliklar va badiiy adibiyotlar jamlanmasi"},
        {img:"images/Info.png", class:"Institut haqida", description:" Institut tarixi, web sahifalari, va ma’muriy xodimlari haqida ma’lumot"},
        {img:"images/Student Male.png", class:"Iqtidorli talabalar", description:" Institutdagi faol, iqtidorli va bilimdon talabalarni sarab bo’limi"},
    ]);

    return(
        <div className="Department">
            <div className="in_department">
                <div className="department_text_group">
                    <div className="department_text_group_img"></div>
                    <div className="department_text_group_text">BO’LIMLAR</div>
                </div>
            <div className="container-fluid">
                <div className="row">
                    {department && department.map((item, index)=>(
                        <div key={index} className="col-xxl-3 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-12">
                            <div>
                            <div className="in_clo_img"><img src={item.img} alt=""/></div>
                            <div className="in_clo_title">{item.class}</div>
                            <div className="in_clo_description">{item.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </div>
    )
}

export default DepartmentUI;