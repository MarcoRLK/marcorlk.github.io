import React, {useState} from 'react';
import Lottie from 'lottie-react-web'
 
const Icon = (props) => {
    const [isStopped, setIsStopped] = useState(false)

    const animationOptions = {
        loop: false,
        autoplay: false,
        animationData: props.icon,
    }

    return (
    <div onMouseEnter={() => setIsStopped(false)}
         onMouseLeave={() => setIsStopped(true)}>
        <Lottie options = {animationOptions} height={100} width={100} isStopped={isStopped}>
        </Lottie>
    </div>
    )

} 


 
export default Icon