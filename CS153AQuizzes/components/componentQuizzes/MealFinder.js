/*
Meal Finder
Using the free The Meal Database API, display a list of dishes using an entered ingredient as their main ingredient
Daniel Olevsky
*/

import React, { useState, useEffect } from 'react';
import { Text, FlatList, View, SafeAreaView, Image, TextInput, StyleSheet } from 'react-native';

const Food = ({food, image}) => (
    <View style={styles.item}>
        <Text style={{fontSize:25, margin: 80}}>{food}</Text>
        <img 
            src={image}
            style={{
                width: 100,
                height: 100,
                }}
            />
    </View>
    );

const Exam3cStart = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [search,setSearch] = useState("beef");

    const getJSON = async (url) => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            return(json);
        } catch (error) {
            console.error(error);
        } 
    };

    const getMeals = async () => {
        try {
          const url = "https://www.themealdb.com/api/json/v1/1/filter.php?i="+search
          const json = await getJSON(url);
          setData(json.meals); 
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

    useEffect(() => {getMeals()}, [search])

    return(
        <SafeAreaView style={{margin: 12, flex: 1}}>
            <Text style={{fontSize: 45}}>Meal Finder</Text>

            <View style={{flexDirection: 'row', fontSize: 20}}>
                <Text style={{fontSize: 25, justifyContent: 'center', alignItems: "center"}}>Main Ingredient: </Text>
                <TextInput
                    style={{fontSize: 25, flex: 1}}
                    onChangeText={setSearch}
                    value={search}
                    placeholder="Enter Ingredient"
                />
            </View>

            <FlatList
                data={data}
                keyExtractor={item => item.idMeal}
                renderItem={({item}) => (<Food food={item.strMeal} image={item.strMealThumb} />)}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#fddcba',
      padding: 20,
      margin: 8,
      borderColor: 'black',
      borderWidth: 3,
      flex: 1,
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'center',
    },
});

export default Exam3cStart;

