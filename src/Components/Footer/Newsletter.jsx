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
            <TextField label={"you_email@gmail.com"} size={"small"} style={{backgroundColor:"#fff",borderRadius:"4px",width:"150px"}}/>
            <div className="icon__send">
              <AiFillCaretRight style={{height:"35px",width:"30px"}}/>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Newsletter
