import { useState } from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import useMenu from '../../../customHooks/useMenu';
import FoodCard from '../FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';

const TabsArea = ()=>{

    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu()
    const Salad = menu.filter(item=> item.category === "salad");
    const Pizza = menu.filter(item=> item.category === "pizza");
    const Drinks = menu.filter(item=> item.category === "drinks");
    const Dessert = menu.filter(item=> item.category === "dessert");
    const Soup = menu.filter(item=> item.category === "soup");


    return(
        <section className="py-[80px] bg-black">
            <div className="max-w-[1260px] w-full mx-auto">
                <Tabs defaultIndex={tabIndex} onSelect={(index)=> setTabIndex(index)}>
                <TabList>
                <Tab>Salad</Tab>
                <Tab>Pizza</Tab>
                <Tab>Soup</Tab>
                <Tab>Dessert</Tab>
                <Tab>Drinks</Tab>
            </TabList>

              <TabPanel>
                    <OrderTab items={Salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                  <OrderTab items={Pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={Soup}></OrderTab>
                   
                </TabPanel>
                <TabPanel>
                    <OrderTab items={Dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                     <OrderTab items={Drinks}></OrderTab>
                </TabPanel>

            </Tabs>
            </div>
            
            
        </section>
    )
}
export default TabsArea;