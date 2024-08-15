import Drawer from "./components/Drawer.tsx";
import {PopUpProvider} from "./PopupProvider.tsx";

function App() {

    return (
        <PopUpProvider>
            <Drawer/>
        </PopUpProvider>
    )
}

export default App
