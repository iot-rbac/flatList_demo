import {SafeAreaView, FlatList, View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';

const todoList = [
  {id: 0, title: 'item1'},
  {id: 1, title: 'item2'},
  {id: 2, title: 'item3'},
  {id: 3, title: 'item4'},
  {id: 4, title: 'item5'},
  {id: 5, title: 'item6'},
  {id: 6, title: 'item7'},
  {id: 7, title: 'item8'},
  {id: 8, title: 'item9'},
  {id: 9, title: 'item10'},
  {id: 10, title: 'item11'},
];

const App = () => {
  // todo list state
  const [todoItems, setTodoItems] = useState([]);
  const [reflesh, setReflesh] = useState(false);

  // simmulate fetch API
  useEffect(() => {
    setTimeout(() => {
      setTodoItems(todoList);
    }, 2000);
  }, []);

  // todo item
  const TodoItem = ({item}) => {
    return (
      <View
        style={{
          paddingHorizontal: 15,
          paddingVertical: 10,
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(0,0,0,.12)',
        }}>
        <Text style={{fontSize: 14, fontWeight: '500'}}>{item.title}</Text>
      </View>
    );
  };

  const ListHeader = () => {
    return (
      <View>
        <Text style={{fontSize: 14, fontWeight: '500'}}>Todo lists</Text>
      </View>
    );
  };

  const ListFooter = () => {
    return (
      <View>
        <Text style={{fontSize: 14, fontWeight: '500'}}>List Footer</Text>
      </View>
    );
  };

  const ListEmpty = () => {
    return (
      <View>
        <Text style={{fontSize: 14, fontWeight: '500'}}>loading...</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={todoItems}
        renderItem={TodoItem}
        // list empty
        ListEmptyComponent={ListEmpty}
        // footer
        ListFooterComponent={ListFooter}
        ListFooterComponentStyle={{
          paddingHorizontal: 15,
          paddingVertical: 10,
          backgroundColor: '#f5c3c5',
        }}
        // header
        ListHeaderComponent={ListHeader}
        ListHeaderComponentStyle={{
          paddingHorizontal: 15,
          paddingVertical: 10,
          backgroundColor: '#ff8f81',
        }}
        // horizontail & numColumns
        horizontal={false}
        numColumns={3}
        keyExtractor={item => item.id}
        //reflesh
        refreshing={reflesh}
        onRefresh={() => {
          setReflesh(true);
          setTodoItems([]);
          setTimeout(() => {
            setTodoItems(todoList);
            setReflesh(false);
          }, 2000);
        }}
      />
    </SafeAreaView>
  );
};

export default App;
