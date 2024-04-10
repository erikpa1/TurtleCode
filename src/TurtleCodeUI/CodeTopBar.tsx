import Stack from "@mui/material/Stack";
import TopBarButton from "./TopBarButton";

export default function TurtleCodeUI() {
    return (
        <Stack direction={"row"}>
            <TopBarButton
                icon={"/tauri.svg"}
                lang={"Class"}
            />
            <TopBarButton
                icon={"/vite.svg"}
                lang={"Namespace"}
            />
            <TopBarButton
                icon={"/vite.svg"}
                lang={"Function"}
            />
            <TopBarButton
                icon={"/vite.svg"}
                lang={"Variable"}
            />

        </Stack>
    )
}