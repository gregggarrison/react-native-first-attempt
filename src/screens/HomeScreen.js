import React, { Component } from 'react'
import { StyleSheet, Text, View, Platform, Image } from 'react-native';

const activityURL = "http://localhost:3000/activities/"

class HomeScreen extends Component {
    // state = {
    //     activities: [{
    //         title: "Mountaineering",
    //         amr: "0.5988",
    //         img: "https://iantaylortrekking.com/wp-content/uploads/2018/11/IMG_36691.jpg"
    //     }, {
    //         title: "Hang Gliding",
    //         amr: "0.00178571",
    //         img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmhga.ca%2FphpWebSite%2Fimages%2FMHGA%2Fawesome%2FMastR-01-L.jpg&f=1&nofb=1",
    //     }]

    // }

    state = {
        activities: []
    }

   
    componentDidMount() {
        fetch(activityURL)
          .then(response => response.json())
          .then(activities => this.setState({ activities }))
    
          // this.getRandomActivities()
    
      }

    activityList = () => {
        return this.state.activities.map(activity => {
            return (
                <View key={activity} >
                    <Text style={styles.text}>{activity.title}</Text>
                    <Text style={styles.text}>{activity.amr}</Text>
                    <Image
                        source={{ uri: activity.img }}
                        style={{ width: 200, height: 200 }}

                    />
                </View>
            )
        })
    }

    render() {


        return (
            <>

                <View style={styles.container}></View>
                {/* <View style={styles.container} >
                    <Text style={styles.text}>{this.state.activities[0].title}</Text>
                    <Text style={styles.text}>{this.state.activities[0].amr}</Text>
                    <Image
                        source={{ uri: this.state.activities[0].img }}
                        style={{ width: 200, height: 200 }}

                    />
                </View> */}

                {/* <View style={styles.container} >
                    <Text style={styles.text}>{this.state.activities[1].title}</Text>
                    <Text style={styles.text}>{this.state.activities[1].amr}</Text>
                    <Image
                        source={{ uri: this.state.activities[1].img }}
                        style={{ width: 200, height: 200 }}
                    />

                </View> */}
            </>
        )

    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'red'
    },
    container: {
        marginTop: 50,
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'blue'
    }
})


export default HomeScreen