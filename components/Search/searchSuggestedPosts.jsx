import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const SearchSuggestedPosts = () => {
  const imageUrls = [
    "https://images.unsplash.com/photo-1529524987368-af489318987c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8MXgxfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1702569258559-e0b4d469b2c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8MXgxfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1627372042956-94867aa1d129?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8MXgxfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1651435060419-eb92305f0e93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fDF4MXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1709398668435-bc1222eb405e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8MXgxfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1627372200285-4c6e294142db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fDF4MXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1567436670499-8d4129485548?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fDF4MXxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1669349129088-002df7abca61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fDF4MXxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1667354155148-637d4a861c9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fDF4MXxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1732747880786-bd437ea32df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fDF4MXxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1687119905599-09fe40700389?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fDF4MXxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1668900728857-7068227dc94e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fDF4MXxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1732668021329-9104153d7906?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8MXgxfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1666533242465-b0e2e00f133f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fDF4MXxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1667546993740-21638c1b670a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fDF4MXxlbnwwfHwwfHx8MA%3D%3D",
    "https://media.istockphoto.com/id/1735412382/photo/domino-modern-design-1x1-dots-with-green-neon-lights-isolated-on-the-black-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=CY_VL07r9jK5JoqrmIrrZFlAfTUD-RKV2kj26YPmNgc=",
    "https://media.istockphoto.com/id/1285747994/photo/tr%C3%A6lanipa.webp?a=1&b=1&s=612x612&w=0&k=20&c=2PhNDpsycVEcAmws0326d9-zjTdkmIcv9eW_jyOpeMc=",
    "https://media.istockphoto.com/id/665431314/photo/red-cargo-ship.webp?a=1&b=1&s=612x612&w=0&k=20&c=Zi3R7UH8NEzMkTZqEAZs0x53qNSL4ENfmjPurSnTSgs=",
    "https://media.istockphoto.com/id/1285748003/photo/faeroe-islands.webp?a=1&b=1&s=612x612&w=0&k=20&c=jOxZxQy1As3uFnRjGrfel2ZtlE5drhc_EXGK9VuVbXA=",
    'https://images.unsplash.com/photo-1525611371090-181e0c81e4ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aWd8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1566217508053-c064c38f8050?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aWd8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1618597865230-affadcdb74cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aWd8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1582177530303-88170eb279ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGlnfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1619033742043-b9a1adf35b30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGlnfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1549221523-a7e676dff376?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGlnfGVufDB8fDB8fHww'
  ];


  return (
    <View style={styles.container}>
      <ScrollView>          
        <View style={styles.parent}>
          {imageUrls.map((img, i) => (
            <View
                key={i}
            >
              <Image
                source={{ uri: img }}
                resizeMode="cover"
                style={styles.image}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchSuggestedPosts;

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  image: {
    width: windowWidth / 3,
    height: windowWidth / 3,
    borderColor: "white",
    borderWidth: 1,
  },
  container: {
    marginTop: 15,
    marginBottom: 165,
  },
  parent: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
