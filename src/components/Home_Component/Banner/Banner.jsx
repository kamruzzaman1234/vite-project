const Banner = ()=>{
    return(
       <div className="bg-white py-[80px] bg-[]">
             <div className="max-w-[1360px] w-full mx-auto ">
            <div className="container">
                    <div className="flex justify-between items-center">
                        <div className="w-[500px] flex text-black flex-col gap-2">
                            <h2 className="text-[18px] leading-[28px] text-warning font-medium">Products is very unique</h2>
                            <h1 className="text-[56px]
                            font-bold uppercase leading-[60px]">Enjoy Your Best shopping</h1>
                            <p className="text-[16px] leading-[26px]">Loream ispum dolar set amet and conceptetur and other site of
                             the dollar site amet and other site of the loeam</p>
                             <div>
                                <button className="btn btn-outline btn-warning uppercase text-black">Shop Now</button>
                             </div>
                             
                        </div>
                        <div className="w-[700px]">
                            <div className="w-full h-[500px]">
                                <img className="w-full h-full object-cover" src="https://i.ibb.co/0yWd6Spx/background-Img.png" 
                            alt="banner-img" />
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
            </div>
        </div>
       </div>
    )
}
export default Banner;