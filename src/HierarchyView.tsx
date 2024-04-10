import React from "react"

import {SimpleTreeView} from '@mui/x-tree-view/SimpleTreeView';
import {TreeItem} from '@mui/x-tree-view/TreeItem';
import {Button} from "@mui/material";


export default function HierarchyView({}) {
    return (
        <div style={{
            padding: "5px"
        }}>
            <SimpleTreeView>
                <TreeItem itemId="grid" label={<div>NS <b>MyNamespace</b></div>}>
                    <TreeItem itemId="grid-community" label="Classes">
                        <TreeItem itemId="x-pro1" label="Person"/>
                        <TreeItem itemId="x-pro2" label="Cat"/>
                        <TreeItem itemId="x-pro3" label="Dog"/>
                    </TreeItem>
                    <TreeItem itemId="grid-pro" label="Functions"/>
                    <TreeItem itemId="grid-premium" label="Views"/>
                    <TreeItem itemId="attributes" label="Attributes"/>
                    <TreeItem itemId="xsad" label={<div>Btn <Button>XYZ</Button></div>}/>
                </TreeItem>

            </SimpleTreeView>
        </div>
    )
}