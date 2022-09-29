import {FaTimes, FaRegCircle, FaPen} from "react-icons/fa";
const Icon =(props) =>{
    console.log(props)
    if(props.icon == "Circle")
{
    return <FaRegCircle />
}
else if(props.icon == "Cross"){
    return <FaTimes />
}
else {
    return <FaPen />
}
}
export default Icon;