import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import home from "./src/home";
import menu from "./src/menu";
import busf from "./src/bus1";
import buss from "./src/bus2";
import bust from "./src/bus3";
import contact from "./src/contact";
import group from "./src/groups";
const screens={
    
    indexapp:{
        screen:home,navigationOptions:{
            headerShown:false
        }
    },menui:{
        screen:menu,navigationOptions:{
            headerShown:false
        } 
    },
    bus1:{
        screen:busf,navigationOptions:{
            headerShown:false
        }
    },
    bus2:{
        screen:buss,navigationOptions:{
            headerShown:false
        }
    },bus3:{
        screen:bust,navigationOptions:{
            headerShown:false
        }
    },contactus:{
        screen:contact,navigationOptions:{
            headerShown:false
        }
    },
    groups:{
        screen:group,navigationOptions:{
            headerShown:false
        }
    }
}
const HomeStack=createStackNavigator(screens)
const Navigator=createAppContainer(HomeStack)
export default Navigator;