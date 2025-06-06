const Footer = ()=>{
    return(
        <section className="bg-black">
                <div className="max-w-[1260px] w-full mx-auto">
                    <footer className="footer sm:footer-horizontal bg-black text-base-content p-10">
  <nav>
    <h6 className="text-[18px] mb-2 font-semibold uppercase text-white">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="text-[18px] mb-2 font-semibold uppercase text-white">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="text-[18px] mb-2 font-semibold uppercase text-white">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <form>
    <h6 className="text-[18px] mb-2 font-semibold uppercase text-white">Newsletter</h6>
    <fieldset className="w-80 flex flex-col gap-[10px]">
      <label>Enter your email address</label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn btn-success join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
                </div>
        </section>
    )
}
export default Footer;