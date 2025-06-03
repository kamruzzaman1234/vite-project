import { useEffect, useState } from "react";

const About = ()=>{
    const [count, setCount] = useState(0)

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount(prev=>{
                if(prev >= 8){
                    clearInterval(interval)
                    return prev
                }
                return prev + 1
            });
        }, 500)

        return ()=> clearInterval(interval)
    }, [])


    return(
        <section className="bg-[#faf6eb]">
            <div className="py-[80px] ">
                <div className="max-w-[1360px] w-full mx-auto">
                    <div className="flex gap-[140px]">
                        <div className="relative">
                            <div className="">
                                <img src="https://i.ibb.co/m55c89hq/background-remove.png" alt="Image" />
                            </div>
                            
                            <div className="absolute top-[40%] flex flex-col gap-[8px] 
                            justify-center items-center right-[-70px] py-[20px] px-[20px] bg-warning">
                                <h3 className="text-[26px] font-bold">{count}</h3>
                                <h4>Years Experience</h4>
                        </div>

                        </div>
                        <div className="flex flex-col gap-[20px] w-[600px]">
                            <div className="flex flex-col gap-[10px]">
                                    <h3 className="text-[20px] leading-[28px] 
                                    text-warning font-semibold">About Us</h3>
                                   <h2 className="text-[32px] text-black leading-[36px] 
                                  font-bold">Our More Story</h2>
                            </div>
                            <div className="flex flex-col gap-[20px]">
                                <p className="text-black text-[16px] leading-[26px]">Progressively innovate standardized niches before flexible minds Seamlessly integrate resource
                                     sucking "outside the box" thinking rather than visionary data. Competently integrate principle-cen
                                      cooperative portals Authoritatively evolve 
                                    .Our coffee bar uses on produced coffee originates from Ethiopia.</p>
                                <p className="text-black text-[16px] leading-[26px]">Progressively innovate standardized niches before flexible minds Seamlessly integrate resource
                                     sucking "outside the box" thinking rather than visionary data. Competently integrate principle-cen
                                      cooperative portals Authoritatively evolve 
                                    .Our coffee bar uses on produced coffee originates from Ethiopia.</p>
                                <div>
                                    <button className="btn btn-warning text-white">Learn More</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;