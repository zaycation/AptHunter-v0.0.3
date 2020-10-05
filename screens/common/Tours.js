import React from 'react';
import { Text, ImageBackground} from 'react-native';

export default class RecentTours extends React.Component{
    render(){
        return(
           <ImageBackground
           source={require('../images/lr.png')}
           style={{
               height:130,
               width:230,
               marginRight:20,
               borderRadius:10,
               marginBottom:40,
               opacity:0.7,
               backgroundColor:"#000",
               marginLeft:3,
               padding:12,
               marginTop:20
           }}
           >
               <Text style={{
                   fontFamily:"Bold",
                   color:"black",
                   fontSize:15
               }}>10/05/2020</Text>
               <Text style={{
                   fontFamily:"Bold",
                   color:"black",
                   fontSize:12
               }}>Virtual 3D Tour</Text>
           </ImageBackground>
        )
    }
}