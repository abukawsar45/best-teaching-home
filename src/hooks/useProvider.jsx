import { useContext } from "react"
import { AuthContext } from "../components/providers/AuthProvider"

const useProvider = () => {
  const provider = useContext(AuthContext);
  return provider



  


}
export default useProvider;