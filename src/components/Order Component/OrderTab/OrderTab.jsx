import FoodCard from "../FoodCard/FoodCard"

const OrderTab = ({items})=>{
    return(
        <div>
            <div className="grid grid-cols-3 gap-[10px] mt-[10px]">
                                    {
                                        items.map(sal=> <FoodCard key={sal._id} items={sal}></FoodCard>)
                                    }
                 </div>
        </div>
    )
}

export default OrderTab;