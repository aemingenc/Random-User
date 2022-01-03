import axios from 'axios'
import React, { useEffect, useState } from 'react';

import phoneImage from "../assets/phone.svg";
import woman from "../assets/woman.svg";
import man from "../assets/man.svg";
import mail from "../assets/mail.svg";
import map from "../assets/map.svg";
import padlock from "../assets/padlock.svg";
import growingupMan from "../assets/growing-up-man.svg";
import growingupWoman from "../assets/growing-up-woman.svg";


const Card = () => {
    const [user, setUser] = useState([])
    const [describe,setDescribe]=useState("My Name is ")
    const[ describeInfo,setDescribeInfo]=useState("")

    const getData =async ()=>{
                const datas = await axios("https://randomuser.me/api/")
            .then((res)=> res.data.results[0])
            // console.log(datas)
            const{
                name:{title,first,last},
                dob:{age},
                location:{city,country},
                phone,
                picture:{large},
                email,
                gender,
                login:{password}
            }=datas
            setUser({
                country,
                city,
                title,
                first,
                last,
                age,
                phone,
                large,
                email,
                password,
                gender
            })
          setDescribe("My name is")
          setDescribeInfo(title+" "+first+ " "+last)
           
        }
         useEffect(() => {getData()
           
        }, [])
        const{
                country,
                city,
                title,
                first,
                last,
                age,
                phone,
                large,
                 email,
                password,
                 gender
        }=user
    return (
        <div  className="container">
            <div className='top-container'>
                <div> 
                    <img  className="topImage"src={large} alt="" /> 
                </div>
                <div className="info">
                    <p> {describe}</p>
                    <span> {describeInfo}</span>
                </div>
            </div>
            <div className="icon">
                <div 
                 onMouseOver ={() =>{
                        setDescribe("My name is");
                        setDescribeInfo(title +" "+first+ " "+last)
                    }}
                    >
                   <img src={gender === "male" ? man :woman} alt="" />
                </div>
                <div
                 onMouseOver={() =>{
                     setDescribe("My email is")
                    setDescribeInfo(email)
                }}
                >
                    <img src={mail} alt="" />
                </div>
                <div 
                  onMouseOver={() =>{
                    setDescribe("My age is")
                    setDescribeInfo(age)
                }}
                >
                    <img src={gender === "male" ?growingupMan :growingupWoman} alt="" />
                </div>
                <div
                  onMouseOver={()=>{
                    setDescribe("My location is")
                    setDescribeInfo(city+" "+country)
                }}
                >
                    <img src={map} alt="" />
                </div>
                <div 
                  onMouseOver={()=>{
                    setDescribe("My phone number is")
                    setDescribeInfo(phone)

                }}
                >
                    <img src={phoneImage} alt="" />
                </div>
                <div
                onMouseOver={()=>{
                    setDescribe("My password is")
                    setDescribeInfo(password)
                }}
                >
                    <img src={padlock} alt="" />
                </div>
            </div>
            <div className='buttons'>
                <button onClick={getData}>NEW USER</button>
                <button >ADD USER</button>
            </div><br />
            
        </div>
            
    );
};

export default Card;
