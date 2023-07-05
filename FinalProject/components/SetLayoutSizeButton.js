<TouchableOpacity
    style={{alignItems: 'center',
    backgroundColor: (settings.darkMode ? appColor.lightButtonBack : appColor.darkButtonBack),
    padding: 10,
    borderRadius: 50}}
    onPress = {() => {setSettings({darkMode:settings.darkMode,layoutSize:10})}}
>
    <Text style={{color: (settings.darkMode ? 'black' : 'white')}}>Medium</Text>
</TouchableOpacity>