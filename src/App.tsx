import SlideOver from "@/Components/SlideOver/SlideOver.tsx";
import { useState } from "react";

function App() {
    const [open, setOpen] = useState(false);
    const handleClick = () => setOpen(true);
    return (
        <div>
            <button onClick={handleClick}>open</button>
            <SlideOver open={open} onClose={setOpen}>
                <div className={"h-full bg-white w-[32rem]"}></div>
            </SlideOver>
        </div>
    );
}

export default App;
