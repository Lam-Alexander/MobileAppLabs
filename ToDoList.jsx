import React from "react";
import { ScrollView, Pressable, View, StyleSheet, Text, SafeAreaView, TextInput, Button} from "react-native";

function ToDoList (){
    return (
        <ScrollView style = {styles.All}>
            <Pressable>
                <View style={[styles.task, styles.completed]}>
                    <Text style={styles.taskText}>Do laundry</Text>
                </View>
            </Pressable>

            <Pressable>
                <View style={[styles.task]}>
                    <Text style={styles.taskText}>Go to gym</Text>
                </View>
            </Pressable>

            <Pressable>
                <View style={[styles.task, styles.completed]}>
                    <Text style={styles.taskText}>Walk dog</Text>
                </View>
            </Pressable>

            <SafeAreaView>
                <View style={styles.form}>
                    <TextInput style={styles.input} placeholder="Add a new task..."/>
                    <Button title="Add" />
                </View>
            </SafeAreaView>
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
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
    },
  });

export default ToDoList;
