import Drawer from "./components/Drawer.tsx";
import {PopUpProvider} from "./PopUpProvider.tsx";

function App() {

    return (
        <PopUpProvider>
            <Drawer/>
        </PopUpProvider>
    )
}

export default App
