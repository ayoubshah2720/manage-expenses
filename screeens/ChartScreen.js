import { StyleSheet, Text, View } from 'react-native'
import { DonutChart } from "react-native-circular-chart";

const ChartScreen = () => {
    const DATA = [
        {name:'Red', value:'250', color:'#faf3e0'},
        {name:'Green', value:'500', color:'#eabf9f'},
        {name:'Blue', value:'750', color:'#b68973'},
        {name:'Purple', value:'1000', color:'#28527a'},
    ]

    return (
        <View style={styles.sectionWrapper}>
            <DonutChart
                data={DATA}
                strokeWidth={15}
                radius={90}
                containerWidth={105 - 10 * 2}
                containerHeight={105 * 2}
                type="round"
                startAngle={0}
                endAngle={360}
                animationType="slide"
            />
        </View>
    )
}

export default ChartScreen

const styles = StyleSheet.create({
    sectionWrapper: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "lightgray",
        backgroundColor: "#ffffff",
        marginVertical: 8,

        shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 1,
        // },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
    },
})
