import { LuBanana } from "react-icons/lu";
const Feature = ()=>{
    return(
        <section className="py-[80px] bg-white">
            <div className="max-w-[1260px] w-full mx-auto px-[20px]">
               <div className="flex flex-col gap-[40px]">
                <div className="text-center text-black max-w-[500px] w-full mx-auto flex flex-col gap-[8px]">
                    <h3 className="text-[20px] leading-[28px] 
                    text-warning font-semibold">Our Feature</h3>
                    <h2 className="text-[32px] leading-[36px] font-bold">What You Provide You</h2>
                </div>
                <div className="grid grid-cols-4 gap-6">
                    <div className="py-[40px] px-[10px] flex flex-col gap-[10px] border-b-4
                     border-t-4 border-t-green-400 border-b-green-500 shadow-lg
                       justify-center items-center">
                        <div>
                            <LuBanana className="text-[80px] text-warning"/>
                        </div>
                        <div>
                            <h3 className="text-black text-[22px] leading-[32px] font-bold uppercase text-center">Banana</h3>
                        </div>
                        <div>
                            <p className="text-black text-center">Lorem ispum dolar set amet and concepteture
                             and other site for the dress</p>
                        </div>
                    </div>
                    <div className="py-[40px] px-[10px] flex flex-col gap-[10px]
                     border-b-4 border-t-4 border-t-green-400 border-b-green-500 shadow-lg
                       justify-center items-center">
                        <div>
                            <LuBanana className="text-[80px] text-warning"/>
                        </div>
                        <div>
                            <h3 className="text-black text-[22px] leading-[32px] font-bold uppercase text-center">Banana</h3>
                        </div>
                        <div>
                            <p className="text-black text-center">Lorem ispum dolar set amet and concepteture
                             and other site for the dress</p>
                        </div>
                    </div>
                    <div className="py-[40px] px-[10px] flex flex-col gap-[10px] 
                    border-b-4 border-t-4 border-t-green-400 border-b-green-500 shadow-lg
                       justify-center items-center">
                        <div>
                            <LuBanana className="text-[80px] text-warning"/>
                        </div>
                        <div>
                            <h3 className="text-black text-[22px] leading-[32px] font-bold uppercase text-center">Banana</h3>
                        </div>
                        <div>
                            <p className="text-black text-center">Lorem ispum dolar set amet and concepteture
                             and other site for the dress</p>
                        </div>
                    </div>
                    <div className="py-[40px] px-[10px] flex flex-col gap-[10px] 
                    border-b-4 border-t-4 border-t-green-400 border-b-green-500 shadow-lg
                       justify-center items-center">
                        <div>
                            <LuBanana className="text-[80px] text-warning"/>
                        </div>
                        <div>
                            <h3 className="text-black text-[22px] leading-[32px] font-bold uppercase text-center">Banana</h3>
                        </div>
                        <div>
                            <p className="text-black text-center">Lorem ispum dolar set amet and concepteture
                             and other site for the dress</p>
                        </div>
                    </div>
                </div>
              </div> 
            </div>
        </section>
    )
}
export default Feature;