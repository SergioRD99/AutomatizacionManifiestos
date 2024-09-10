import { View,Text } from "react-native"
import style from "../styles/style";


const Users:React.FC = () =>{
    return(
        <View style={style.container}>
            <Text style={style.text}>
                Vista de usuarios
            </Text>
        </View>
    )
}
export default Users;