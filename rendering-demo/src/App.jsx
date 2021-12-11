import { useState, memo, useCallback } from "react";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";

export const App = memo(() => {
    console.log("App レンダリング");

    const [num, setNum] = useState(0);

    const onclickButton = () => {
        setNum((prov) => prov + 1);
    };

    const onClickReset = useCallback(() => {
        setNum(0);
    },[]);

    return (
        <>
            <button onClick={onclickButton}>ボタン</button>
            <p>{num}</p>
            <Child1 onClickReset={onClickReset}/>
            <Child4 />
        </>
    );
});