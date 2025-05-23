import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import { Tabs } from 'expo-router'
import React from 'react'
import {icons} from '@/constants/icons'
import {images} from '@/constants/images'


const TabBG = ({focused, icon, title} : any) => {

    return(
    <>
    {focused ? (
        <>
            <ImageBackground
            source={images.highlight}
            className='flex flex-row w-full flex-1 min-w-[178px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden'
            >
                <Image source={icon} tintColor='#151312' className='size-5'/>
                <Text className='text-secondary text-base font-semibold ml-2'>{title}</Text>
            </ImageBackground>
            </>
        ): (
            <View className='size-full justify-center items-center mt-4 rounded-full'>
                <Image source={icon} tintColor='#a8b5db' className='size-5'/>
            </View>
        )}
        </>
    )
}

const _Layout = () => {


  return (
    <>
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarItemStyle: {
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            },
            tabBarStyle: {
            backgroundColor: "#141414cc",
            borderRadius: 50,
            marginHorizontal: 20,
            marginBottom: 24,
            height: 52,
            position: "absolute",
            overflow: "hidden",
            borderWidth: 0,
            elevation: 0
            },

            
        }}
        

    >
        <Tabs.Screen name="index" options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({focused}) => (
                <TabBG focused={focused} icon={icons.home} title='Home'/>
            )
            }} 
        />
        <Tabs.Screen name="search" 
        options={{
            title: 'Search',
            headerShown: false,
            tabBarIcon: ({focused}) => (
                <TabBG focused={focused} icon={icons.search} title='Search'/>
            )
            }} 
        />
        
    </Tabs>
    </>
    
  )
}

export default _Layout

