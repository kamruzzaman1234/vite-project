import { useEffect, useState } from "react";
import ImgItem from "../../../Shared/ImgItem/ImgItem";

const ImgArea = ()=>{
    const [img, setImg] = useState([]);

    useEffect(()=>{
        fetch("product.json")
        .then(res => res.json())
        .then(data => setImg(data))
    },[])
    return(
        <section className="">
            <div className="max-w-[1260px] w-full mx-auto">
                <div className="grid grid-cols-4 gap-[10px]">
                    {
                        img.slice(0,8).map(imgs=>(
                            <ImgItem key={imgs._id} imgs={imgs}></ImgItem>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ImgArea;