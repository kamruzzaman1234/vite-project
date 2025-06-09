import { Link } from "react-router-dom";

const MenuItem = ({items})=>{
    const {name, image, price, recipe} = items
    return(
        <section>
                <div className="flex justify-between items-center gap-[30px]">
                    <div className="w-[120px] h-[70px]">
                        <img src={image} alt={name} 
                        className="w-full h-full object-cover rounded-l-lg rounded-r-lg"/>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <h3 className="text-warning text-[16px] leading-[26px] font-semibold">{name}</h3>
                        <h4 className="text-black">{recipe}</h4>

                    </div>
                    <div>
                        <h2 className="text-[22px] leading-[32px] font-bold px-4 bg-green-400 rounded-lg text-white">{price}</h2>
                    </div>

                </div>
                <div className="mt-[10px]">
                    <Link to="/order" className="btn btn-black">Order Now</Link>
                </div>

        </section>
    )
}
export default MenuItem;