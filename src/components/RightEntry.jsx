import ShpereDistort from "./SphereDistort";
import astronaut from '../img/astronaut.png';


const RightEntry = ({ isNonMobileScreen }) => {

    return (
        <div className='right'>

            <ShpereDistort isNonMobileScreen={isNonMobileScreen} />
            
            <img src={astronaut} alt="animation astronaut moving to top and down" />
        </div>
    )
}

export default RightEntry;