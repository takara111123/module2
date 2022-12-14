import { StyleSheet,Text, View,FlatList, TouchableOpacity} from "react-native";
import React from "react";
import { EvilIcons } from '@expo/vector-icons';
import { Selector, useSelector } from "react-redux";
import { deleteTask } from "../redux/taskSlice";
import { useDispatch } from "react-redux";


const TodoLIST=()=>{

const dispatch = useDispatch();
const todos =useSelector(state=>state.tasks)    
const data=[
    {
     id:1,
     title: "Learn React1",
    },
    {
        id:2,
        title: "Learn React2",
       },
       {
        id:3,
        title: "Learn React3",
       },
];

const onDelete = (id) => {
    dispatch(
      deleteTask({
        id: id,
      })
    );
  };


    //renderItemFunctionwithdeletebutton
    const renderItem=({item})=>{
        return(
            <View  style={styles.item}>
                <Text style={styles.title}>{item.name}</Text>                
            </View>
        )
    }

    return(
        <View>
            <FlatList
                data={todos}
                renderItem={renderItem}
                keyExtractor={(item)=>item.id.toString()}>
            </FlatList>
        </View>
    );
}

export default TodoLIST;

const styles = StyleSheet.create({
    item:{
        backgroundColor:"#e9e9e9",
        padding:20,
        marginVertical:8,
        marginHorizontal:16,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    
    title:{
        fontSize:23,
    },
    
    delete:{
        fontSize:24,
        color:"red ",
    },});