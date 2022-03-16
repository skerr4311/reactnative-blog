import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {
    const { state, addBlogPost, deleteBlogPost } = useContext(Context);
    return (
        <View style={styles.main}>
            <Button title="Add Post" onPress={addBlogPost}/>
            <FlatList 
                data={state}
                keyExtractor={blogPosts => blogPosts.id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title}</Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}> 
                                <Feather style={styles.icon} name="trash" />
                            </TouchableOpacity>
                        </View>
                        )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        paddingHorizontal: 10,
        borderColor: 'grey'
    },
    main: {
        flex: 1,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;