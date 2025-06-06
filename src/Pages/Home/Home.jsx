import About from "../../components/Home_Component/About/About";
import Banner from "../../components/Home_Component/Banner/Banner";
import Feature from "../../components/Home_Component/Feature/Feature";
import ImgArea from "../../components/Home_Component/ImageArea/ImgArea";
import Map from "../../components/Home_Component/Map/Map";
import NewsLetter from "../../components/Home_Component/NewsLetter/NewsLetter";
import Popular from "../../components/Home_Component/Popular_Food/Popular";
import Team from "../../components/Home_Component/TeamArea/Team";
import Testimonial from "../../components/Home_Component/Testimonila/Testimonial";

const Home = ()=>{
    return(
        <div>
            <Banner></Banner>
            <Testimonial></Testimonial>
            <Feature></Feature>
            <About></About>
            <Popular></Popular>
            <ImgArea></ImgArea>
            <Team></Team>
            <NewsLetter></NewsLetter>
            <Map></Map>
        </div>
    )
}

export default Home;