import React from "react";

const Button = ({text, click}) => {
    return (
        <>
            <button className="Button" onClick={() => click()}>{text}</button>

            <style jsx>{`
              .Button {
                background-color: #E84141;
                padding: .875rem 1.75rem;
                color: white;
                border-radius: 4px;
                border: none;
                cursor: pointer;
                position: relative;
                z-index: 2;
              }
            `}</style>
        </>
    )
}

export default Button;