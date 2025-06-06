const Team = ()=>{
    return(
        <section className="py-[80px]">
            <div className="max-w-[1260px] w-full mx-auto">
                <div className="flex flex-col gap-[40px]">
                    <div>
                        <div className="text-center text-black max-w-[500px] w-full mx-auto flex flex-col gap-[8px]">
                          <h3 className="text-[20px] leading-[28px] 
                            text-warning font-semibold">Our Team</h3>
                            <h2 className="text-[32px] leading-[36px] font-bold">Meet Our Dedicated Team</h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-5">
                        <div className="shadow-lg flex border-b-4 border-b-warning flex-col py-[20px] px-[10px] gap-[20px]">
                            <div className="">
                                <img src="https://i.ibb.co/5gMxCZW0/pexels-simon-robben-55958-614810.jpg"
                                className="object-cover rounded-lg" alt="" />
                            </div>
                            <div className="text-center flex flex-col gap-[8px]">
                                <h3 className="text-[22px] font-semibold text-black">John Luise</h3>
                                <h4 className="text-green-400 text-[16px] font-medium">Frontend Developer</h4>
                            </div>
                        </div>
                          <div className="shadow-lg flex border-b-4 border-b-warning flex-col py-[20px] px-[10px] gap-[20px]">
                            <div className="">
                                <img src="https://i.ibb.co/5gMxCZW0/pexels-simon-robben-55958-614810.jpg"
                                className="object-cover rounded-lg" alt="" />
                            </div>
                            <div className="text-center flex flex-col gap-[8px]">
                                <h3 className="text-[22px] font-semibold text-black">John Luise</h3>
                                <h4 className="text-green-400 text-[16px] font-medium">Frontend Developer</h4>
                            </div>
                        </div>
                          <div className="shadow-lg flex border-b-4 border-b-warning flex-col py-[20px] px-[10px] gap-[20px]">
                            <div className="">
                                <img src="https://i.ibb.co/5gMxCZW0/pexels-simon-robben-55958-614810.jpg"
                                className="object-cover rounded-lg" alt="" />
                            </div>
                            <div className="text-center flex flex-col gap-[8px]">
                                <h3 className="text-[22px] font-semibold text-black">John Luise</h3>
                                <h4 className="text-green-400 text-[16px] font-medium">Frontend Developer</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team;