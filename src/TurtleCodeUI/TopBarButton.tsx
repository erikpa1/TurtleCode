import "./TopBarButton.css"

import React from "react";

import Stack from "@mui/material/Stack";


interface TopBarButtonProps {
    isActive?: boolean
    icon: string
    lang: string
    onClick?: (e: React.MouseEvent<HTMLElement>) => void
    disabled?: boolean
}

export default function TopBarButton({icon, isActive, disabled, onClick, lang}: TopBarButtonProps) {


    return (
        <div
            className={"TopBarButton"}
            style={{
                width: "60px",
                padding: "2px",
                margin: "2px",
                ...((isActive ? {backgroundColor: "#dfeacc"} : {})),
                ...((disabled ? {opacity: 0.5} : {cursor: "pointer"}))
            }}
            {...((disabled ? {} : {onClick: onClick}))}


        >
            <Stack>
                <div>
                    <img

                        src={icon}
                        style={{
                            width: '100%',
                            height: 30,
                            marginLeft: "auto"
                        }}
                    />

                </div>

                <div style={{
                    textAlign: "center",
                    marginTop: "auto",
                    fontSize: "11px",
                    color: "black",
                }}>
                    {lang}
                </div>
            </Stack>

        </div>
    )
}
