import { useEffect, useState } from "react";
import { DateTime } from "luxon";

const style = {
    width: "200px",
    hight: "600px",
    border: "solid 1px #ccc",
    borderRadius: "20px",
    textAlign: "center",
    fontSize: "20px",
    backgroundColor: "#cccccc"
}
const date_format = "hh:mm:ss";

export const Clock = () => {
    const [time, setTime] = useState(DateTime.now().toFormat(date_format));

    useEffect(() => {
        const interval = setInterval(()=> {
            setTime(prov => prov = DateTime.now().toFormat(date_format));
        }, 1000);
        return () => clearInterval(interval);
    },[])

    return (
        <div style={style}>
            <p>{time}</p>
        </div>
    );
};