import {DockLayout} from "rc-dock";

import "./rc-dock.css"
import HierarchyView from "./HierarchyView";
import TestChart from "./chart_test/TestChart";
import TurtleCodeUI from "./TurtleCodeUI/CodeTopBar";

export default function Docking({}) {


    const layout = {
        dockbox: {
            mode: 'vertical',
            children: [
                {
                    size: 30,
                    tabs: [
                        {
                            title: "Xxxx",
                            closable: false,
                            id: "x",
                            content: (
                                <TurtleCodeUI/>
                            )
                        },
                        {
                            title: "zzzz",
                            closable: false,
                            id: "z",
                            content: (
                                <div>There</div>
                            )
                        }
                    ],
                    group: "card",
                },
                {
                    mode: 'horizontal',
                    children: [
                        {
                            size: 200,
                            tabs: [
                                {
                                    title: "products",
                                    closable: false,
                                    id: "products",
                                    content: (
                                        <div>
                                            <HierarchyView/>
                                        </div>
                                    )
                                }
                            ],
                        },
                        {
                            size: 1000,
                            tabs: [
                                {
                                    title: "something",
                                    closable: false,
                                    id: "something",
                                    content: (
                                        <TestChart/>
                                    )
                                }
                            ],
                        }
                    ],
                }
            ]
        }
    }

    return (
        <DockLayout
            defaultLayout={layout as any}
            style={{
                position: "absolute",
                left: 2,
                top: 2,
                right: 2,
                bottom: 2,
            }}
        />
    )
}