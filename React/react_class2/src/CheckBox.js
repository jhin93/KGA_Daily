import React from "react"

function CheckBox({children, checked, ...rest}) {
    return (
        <div>
            <label>
                <input type="checkbox" checked={checked} {...rest} />
            </label>
            <span>{children}</span>
        </div>
    )
}

export default CheckBox;
