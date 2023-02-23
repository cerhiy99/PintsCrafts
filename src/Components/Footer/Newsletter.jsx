import React from 'react'
import {AiFillCaretRight} from "react-icons/ai";
import { Button, TextField } from '@material-ui/core'

const Newsletter = () => {
  return (
    <div className="newsletter footer__block">
        <div className="footer__title">
            НАША РОЗСИЛКА
        </div>
        <div className="footer__desctiption">
        <div className="newsletter__description">
            Ми будем надсилати вам інформацію при знижки і останні новини нашого закладу.
        </div>
        <div className="newsletter__description2">
            <TextField label={"you_email@gmail.com"} size={"small"} style={{backgroundColor:"#fff",borderRadius:"4px"}}/>
            <Button style={{backgroundColor:"#FC0",marginLeft:"-5px"}}><AiFillCaretRight style={{height:"35px",width:"40px"}}/></Button>
        </div>
        </div>
    </div>
  )
}

export default Newsletter
