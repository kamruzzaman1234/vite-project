const ImgItem = ({imgs})=>{
    const {image, name} = imgs
    return(
        <section>
                <div className="w-full h-[300px]">
                    <img src={image} className="w-full h-full object-cover" alt={name} />
                </div>
        </section>
    )
}
export default ImgItem;