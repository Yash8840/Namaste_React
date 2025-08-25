import { useRouteError } from "react-router-dom";

const Error = ()=>{
  const err = useRouteError();
  
    return (
        <h1>OOPS! Something went wrong</h1>
    )
}
export default Error;