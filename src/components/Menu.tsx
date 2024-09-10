import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import Bitacora from "../screens/bitacora";
import Users from "../screens/users";
import Generate_manifest from "../screens/generate_manifest";
import Historical_manifest from "../screens/historical_manifest";
import Recat from "../screens/recat";
import Units from "../screens/units";


const Drawer = createDrawerNavigator();

const Menu: React.FC =() =>{
    return(
      <NavigationContainer>
        <PaperProvider>
            <Drawer.Navigator>
              <Drawer.Screen name="Historico de manifiestos" component={Historical_manifest} />
              <Drawer.Screen name="Generar manifiestos" component={Generate_manifest}/>
              <Drawer.Screen name="Bitacora" component={Bitacora} />
              <Drawer.Screen name="Generar Recat" component={Recat} />
              <Drawer.Screen name="Unidades" component={Units} />
              <Drawer.Screen name="Usuarios" component={Users} />
            </Drawer.Navigator>
        </PaperProvider>
    </NavigationContainer>
    )
}

export default Menu;