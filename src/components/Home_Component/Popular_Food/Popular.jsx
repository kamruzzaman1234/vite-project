import { useEffect, useState } from "react";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const Popular = ()=>{
    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        fetch("product.json")
        .then(res => res.json())
        .then(data => {
            const popularFilter = data.filter(item=> item.category === "popular")
            setMenu(popularFilter)
        })
    },[])
    return(
        <section className="py-[80px]">
            <div className="max-w-[1260px] w-full mx-auto">
                <div className="flex flex-col gap-[40px]">
                <div>
                    <div className="text-center text-black max-w-[500px] w-full mx-auto flex flex-col gap-[8px]">
                     <h3 className="text-[20px] leading-[28px] 
                    text-warning font-semibold">Our Popular Product</h3>
                    <h2 className="text-[32px] leading-[36px] font-bold">Most Popular Product Here</h2>
                   </div>
             </div>
             <div className="grid grid-cols-2 gap-[50px] ">
                {
                    menu.map(items=> 
                    <MenuItem key={items._id} items={items} ></MenuItem>)
                }
             </div>
                </div>
            </div>
        </section>
    )
}

export default Popular;