import React from "react"
import {MdCheckBox, MdCheckBoxOutlineBlank} from "react-icons/md";
import Styles from "./CheckBox.module.css"
import classNames from 'classnames/bind'
const cx = classNames.bind(Styles);

function CheckBox({children, checked, ...rest}) {
    return (
        // <div className={Styles.checkbox}>
        <div className={cx('checkbox')}>
            <label>
                {/* 체크가 되면 cheked 속성이 true가 됨(checked=true로 됨. 즉 {checked}가 true가 되는 것)  */}
                <input type="checkbox" checked={checked} {...rest} />
                {/* 체크가 됐으면 MdCheckBox 아니면 MdCheckBoxOutlineBlank*/}
                <div className={cx('icon')}>
                    {checked ? (
                        <MdCheckBox className={cx('checked')}/>
                    ) : (
                        <MdCheckBoxOutlineBlank />
                    )}
                </div> 
            </label>
            <span>{children}</span>
        </div>
    )
}

export default CheckBox;
