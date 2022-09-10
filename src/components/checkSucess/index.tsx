import React from "react";
import css from "./checkSuccess.css";

export function CheckSuccess({ children }) {
    return (
        <div className={css.container}>
            <p className={css.text}>{children}</p>
            <div className={css["success-checkmark"]}>
                <div className={css["check-icon"]}>
                    <div className={`${css.icon} ${css["icon--order-success"]} ${css.svg}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="72px" height="72px">
                            <g fill="none" stroke="#8EC343" strokeWidth="2">
                                <circle
                                    cx="36"
                                    cy="36"
                                    r="35"
                                    style={{
                                        strokeDasharray: "240px, 240px",
                                        strokeDashoffset: "480px",
                                    }}
                                ></circle>
                                <path
                                    d="M17.417,37.778l9.93,9.909l25.444-25.393"
                                    style={{
                                        strokeDasharray: "50px, 50px",
                                        strokeDashoffset: "0px",
                                    }}
                                ></path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
