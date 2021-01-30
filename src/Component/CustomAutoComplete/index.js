
import React, { useState } from 'react';
import './style.css';
function AutoComplete() {

    const list = ['FirstName', 'LastName', 'GPID'];
    const [suggestions, setSuggestions] = useState(list);
    const [textBoxValue, setTextBoxValue] = useState("")
    const [showList, setShowList] = useState(false);

    const changeSuggestions = (val) => {
        let newSuggestions = list;
        if (val.length > 0) {
            newSuggestions = list.filter(item => {
                if (item.toLowerCase().includes(val.toLowerCase())) {
                    return true;
                }
                else {
                    return false;
                }
            });
        }
        setSuggestions(newSuggestions);
    }

    const onTextChange = (e) => {
        let val = e.target.value;
        console.log(val);
        if(val.trim().length === 0 || val.trim().toUpperCase().endsWith('AND')) {
            setSuggestions(list);
            //val = val.trim();
        }
        else {
            // commenting becaues it is preventing 'AND' to come into suggestions
            //changeSuggestions(val);
        }
        // if(!val.endsWith(' ')) {
        setTextBoxValue(val);
        //changeSuggestions(val);
    //}
    }

    const changeTextBoxValue = (val)=>{
        if(val === 'AND') {
            setTextBoxValue(textBoxValue+' '+val )
        }
        else {
            setTextBoxValue(textBoxValue+' '+val+ ' = ');
        }
        
    }

    const changeSuggestionList = (event)=>{
        console.log('keyPress'+event);
        console.log(event.which || event.keyCode);
        //write code for changing suggestion list;
        if(event.which===32 || event.keyCode===32) { // for space
            if(textBoxValue.trim().toUpperCase().endsWith('AND')){
                setSuggestions(list);
            }
            else {
                setSuggestions(['AND']);
            }
        }
        if(event.which === 27 || event.keyCode === 27 ) {
            setSuggestions([]);
        }
        // else {
        //     let val = event.target.value;
        //     console.log(val);
        //     if(val.trim().length === 0 ) {
        //         setSuggestions(list);
        //         val = val.trim();
        //     }
        //     else {
        //         changeSuggestions(val);
        //     }
        //     // if(!val.endsWith(' ')) {
        //     setTextBoxValue(val);
        //     //changeSuggestions(val);
        // //}
        // }
    }
    return (
        // onBlur={()=>{setShowList(false)}}
        <div className="AutoComplete">
            <input type="text" 
            onChange={onTextChange} 
            onKeyDown = {(e)=>{changeSuggestionList(e)}} 
            onFocus={()=>{setShowList(true)}} 
            placeholder="Click to Search" 
            value={textBoxValue} />
            {
                showList ?
                    <ul>
                        {
                            suggestions.map((item, index) => <li key={index} onClick={() => {changeTextBoxValue(item); setSuggestions([])}}>{item}</li>)
                        }
                    </ul> : null
            }
        </div>

    )
}

export default AutoComplete;
