
const FoodCard = ({items})=>{
    
    const {name, image, recipe,} = items;
    
    return(
        <section className="py-[10px]">
            <div className="max-w-[1260px] w-full mx-auto">
                <div className="card bg-base-100 w-96 shadow-sm">
                 <figure className="px-10 py-[10px]">
            <img
              src={image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions">
      <button className="btn btn-success">Add to Cart</button>
    </div>
  </div>
</div>
            </div>
        </section>
    )
}
export default FoodCard;