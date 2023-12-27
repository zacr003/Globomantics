import { useState } from "react";
import Banner from "./banner";
import HouseList from "./houseList";
import House from "./house";

const App = () => {
    const [selectedHouse, setSelectedHouse] = useState();
    // do checks on house
    const setSelectedHouseWrapper = (house) => {
        setSelectedHouse(house);
    };

    return (
        <>
            <Banner>
                <div>Providing Houses All Over the World!</div>
            </Banner>
            {selectedHouse ? (
                <House house={selectedHouse} />
            ) : (
                <HouseList selectHouse={setSelectedHouseWrapper} />
            )}
        </>
    );
};



export default App;