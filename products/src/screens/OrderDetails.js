import React from "react";
import {Text,View,Image} from "react-native"
import NavigationHeader from "../Components/NavigationHeader";
const OrderDetails=({route})=>{
    return(
        <>
        <View>
        <NavigationHeader title={"Order details"}></NavigationHeader>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",paddingTop:20}}>
            <View>
        <Text style={{fontSize:28,fontWeight:"bold",color:"black",padding:15}}>Nopa Stavrou</Text>
        <Text style={{padding:15}}>{route.params.obj.DATE} {route.params.obj.TIME}</Text>
   
        </View>
        <View>
        <Image
                    style={{height: 150, width: 150, borderRadius: 20}}
                    source={{uri: route.params.obj.IMG}}></Image>
        </View>
        </View>
        <View style={{height: 1,margin:10, backgroundColor: 'rgba(196,196,196,1)'}} />
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <Text style={{fontSize:20,fontWeight:"bold",padding:16}}>{route.params.obj.QUANTITY}  x {route.params.obj.NAME}</Text> 
            <Text style={{fontSize:20,fontWeight:"bold",padding:16}}>{route.params.obj.PRICE}</Text>
        </View>
        {route.params.obj.NOTE == ""? <View/>:
        <View style={{padding:10,justifyContent:"center",alignItems:"center"}}>
        <View style={{backgroundColor:"#D3D3D3",padding:20,borderRadius:10,width:"80%",justifyContent:"center",alignItems:"center"}}>
            <Text style={{color:"black",textAlign:"center"}}>{route.params.obj.NOTE}</Text>
        </View>
        </View>}
        <View style={{justifyContent:"center",alignItems:"center",padding:20}}>
        <Text style={{fontWeight:"bold",fontSize:30,color:"black"}} >Total ₹{route.params.obj.PRICE*route.params.obj.QUANTITY}</Text>
        </View>
     
        </>
        
    )

}
export default OrderDetails