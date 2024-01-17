import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Task from './src/pages/task';
import Details from './src/pages/details';
import NewTask from './src/pages/newtask';

const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Task"> 
        <Stack.Screen
          name="Task"
          component={Task}
          options={{headerTintColor:"red"}}
        />
        <Stack.Screen
          name="New task"
          component={NewTask}
          options={{ headerTintColor: "red" }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ headerTintColor: "red" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


