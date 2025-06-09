import { Link } from "react-router-dom";

const Navbar = ()=>{
    return(
        <div className="bg-black">
            <div className="max-w-[1460px] w-full mx-auto px-2">
   <div className="navbar  shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link to="/" className="text-[16px] font-semibold">Home</Link></li>
        <li><Link to="" className="text-[16px] font-semibold">Products</Link></li>
        <li><Link to="" className="text-[16px] font-semibold">Service</Link></li>
        <li><Link to="order" className="text-[16px] font-semibold">Order</Link></li>
        <li><Link to="" className="text-[16px] font-semibold">Contact</Link></li>
        
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost text-xl">Shop<sup className="text-warning">Live</sup> </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li> <Link to="/" className="text-[16px] font-semibold uppercase">Home</Link></li>
      <li><Link to="" className="text-[16px] font-semibold uppercase">Products</Link></li>
      <li><Link to="" className="text-[16px] font-semibold uppercase">Service</Link></li>
      <li><Link to="order" className="text-[16px] font-semibold uppercase">Order</Link></li>
      <li><Link to="" className="text-[16px] font-semibold uppercase">Contact</Link></li>
    </ul>
  </div>
  <div className="navbar-end flex gap-2">
    <Link className="btn btn-outline hover:btn-warning uppercase text-white">Register</Link>
    <Link className="btn uppercase btn-outline hover:btn-warning uppercase text-white">Login</Link>
  </div>
</div>
        </div>
        </div>
    )
}
export default Navbar;