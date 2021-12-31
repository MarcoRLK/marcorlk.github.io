import React, {useState} from 'react';
import Lottie from 'lottie-react-web'
 
const Icon = (props) => {
    const [isStopped, setIsStopped] = useState(false)

    const animationOptions = {
        loop: 1,
        autoplay: false,
        animationData: props.icon,
    }

    return (
    <div 
         onMouseEnter={() => setIsStopped(true)}
         onMouseMove={() => setIsStopped(false)}>
        <Lottie options = {animationOptions} height={100} width={100} isStopped={isStopped}>
        </Lottie>
    </div>
    )

} 

 
export default Icon