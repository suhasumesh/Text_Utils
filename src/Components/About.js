import React, { useState } from 'react'

export default function About(props) {

     const [myStyle,setMyStyle] = useState(
    {
        color:'black',
        backgroundColor: 'white',
        
    })
    // let myBackStyle ={                                                               // Never used.
    //     color: props.mode==='dark'?'white':'#253644',
    //     backgroundColor:props.mode === 'dark'?'#253644':'white'
    // }
    const [btnText, setBtnText] = useState('Enable Dark Mode')
    const toggleStyle = ()=>{
        if(myStyle.color === 'black'){
            setMyStyle({
                color:'white',
                backgroundColor: '#253644',
                // border: '0.5px solid white',
                // borderRadius: 10
                
            })
            setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({
                color:'black',
                backgroundColor: 'white',
                // border: '1px solid black'
            })
            setBtnText("Enable Dark Mode")
        }
    }


    return (
        <div className="container" style={myStyle}>
            <h2>About Us</h2>
            <div className="accordion" id="accordionExample " style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            About Developer
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This TextUtil was developed by <strong>Suhas Umesh</strong> a 3rd year student currently studying in Bangalore Institute Of Technology (BIT)  <code>TextUtils</code>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Objective
                        </button> 
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            The main <strong>objective</strong> of this  <code>TextUtils</code> is to provide a simple preview of your text and it mentions how many words and characters that are there in the textbox and calculates the time that can take to read the text. It also helps to convert all the text to <strong>Uppercase </strong>,<strong>Lowercase</strong> and also <strong> speaks out</strong> the text which is there in the textbox. And also  <strong>Clears the Extra Space</strong> present in the text and <strong> Clears</strong> the whole textbox when clicked on the cleartext
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Languages Used
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>JavaScript <br /></strong>
                            <strong>Html <br /></strong> 
                            <strong>CSS <br /></strong> 
                            and this TextUtils was developed using <strong>React </strong> JS  Library for better user interfaces.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-2">
            <button className='btn btn-primary' onClick={toggleStyle}>{btnText}</button>
            </div>
        </div>
    )
}