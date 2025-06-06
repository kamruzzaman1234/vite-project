const NewsLetter = () => {
  return (
    <section
      className="bg-green-50 
      bg-cover bg-fixed bg-center py-[80px]"
    >
        <div className="">
            <div className="max-w-[1260px] w-full mx-auto">
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <h2 className="text-black text-4xl font-bold text-center">Newsletter</h2>
            <h3 className="text-warning font-semibold text-[16px] text-center">When looking for a new bouquet Valentines or Mother's Day</h3>
          </div>
          <div className="flex justify-center">
            <input
              type="text" 
              placeholder="Enter your email"
              className="px-4 py-2 text-black w-[500px] border-2 border-success"
            />
            <button className="btn text-white btn-success px-4 py-[10px]">Subscribe</button>
          </div>
        </div>
      </div>
        </div>
      
    </section>
  );
}
export default NewsLetter;