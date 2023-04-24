
import { StyleSheet, View } from 'react-native'

export default function LoadingSkeleton() {
    return (
        <View style={styles.loadingSkeletonContainer}>
            <View style={styles.loadingSkeleton}></View>
            <View style={styles.loadingSkeleton}></View>
            <View style={styles.loadingSkeleton}></View>
        </View>);
};

const styles = StyleSheet.create({
    loadingSkeletonContainer: {
        flexDirection: 'column'
    },
    loadingSkeleton: {
        height: 20, width: '100 %',
        backgroundColor: '#f0f0f0',
        marginBottom: 10, borderRadius: 5,
    }
})






// @keyframes loading { from { opacity: 0.5; } to { opacity: 1; } }
// animation: loading 1.5s infinite;
