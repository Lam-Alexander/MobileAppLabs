import React from "react";
import { ScrollView, Pressable, View, StyleSheet, Text, SafeAreaView, TextInput, Button} from "react-native";

function ToDoList ({ tasks }){
    return (
        <ScrollView style = {styles.All}>
            {tasks.map((task, index) =>(
                <Pressable key = {index}>
                    <View style = {styles.task}>
                        <Text style = {styles.taskText}>{task}</Text>
                    </View>
                </Pressable>
            ))}
      </ScrollView>   
    );
}

const styles = StyleSheet.create({
    All:{
        marginTop:40,
    },
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    completed: {
      backgroundColor: '#96F066',
    },
    taskText: {
      fontSize: 16,
    },
  });

export default ToDoList;