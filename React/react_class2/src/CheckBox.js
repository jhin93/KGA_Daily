import React from "react"

function CheckBox({children, checked, ...rest}) {
    return (
        <div>
            <label>
                {/* 체크가 되면 cheked 속성이 true가 됨(checked=true로 됨. 즉 {checked}가 true가 되는 것)  */}
                <input type="checkbox" checked={checked} {...rest} />
            </label>
            <span>{children}</span>
        </div>
    )
}

export default CheckBox;
