import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View ,SafeAreaView} from "react-native";
//import TodoHeader
import TodoHeader from "./src/components/TodoHeader";
import TodoLIST from "./src/components/TodoList";
import store from "./src/redux/store";
import { Provider } from "react-redux";


export default function Feed(){
    const RootApp=()=>{
        return(
          <SafeAreaView>
            <TodoHeader></TodoHeader>
          </SafeAreaView>
        )
      }
    
      return (
        <Provider store={store}>
          <RootApp></RootApp>
        </Provider>
      );
}