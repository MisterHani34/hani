<View style={{display:'flex',gap:15,alignItems:'center', marginTop:220}}>
    <TouchableOpacity style={styles.container} onPress={()=>navigation.goBack('Home')}>
      <FontAwesome name="home" size={40} color="white" />
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.container1}   >
    <FontAwesome name="bookmark" size={24} color="white" />
  </TouchableOpacity >
  <TouchableOpacity style={styles.container1}  >
  <Entypo name="login" size={24} color="white" />
  </TouchableOpacity>
  </View>