import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const { width } = Dimensions.get('window');

export default function HomeScreen() {
    const handleProfilePress = () => {
        console.log('Profile pressed');
        // Navigate to profile screen
    };

    const handleAddFarmPress = () => {
        console.log('Add Farm pressed');
        // Navigate to add farm screen
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#1f2937" />

            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <View style={styles.appIcon}>
                        <Ionicons name="leaf" size={20} color="#ffffff" />
                    </View>
                    <Text style={styles.headerTitle}>EarthTwin: Farmer App</Text>
                </View>
                <View style={styles.headerRight}>
                    <Text style={styles.coinText}>0</Text>
                    <View style={styles.coinIcon}>
                        <Text style={styles.coinSymbol}>$</Text>
                    </View>
                </View>
            </View>

            {/* Main Content */}
            <View style={styles.content}>
                <View style={styles.cardContainer}>
                    {/* Profile Card */}
                    <TouchableOpacity
                        style={styles.card}
                        onPress={handleProfilePress}
                        activeOpacity={0.7}
                    >
                        <View style={[styles.iconContainer, styles.profileIcon]}>
                            <Ionicons name="person" size={32} color="#059669" />
                        </View>
                        <Text style={styles.cardTitle}>Profile</Text>
                    </TouchableOpacity>

                    {/* Add Farm Card */}
                    <TouchableOpacity
                        style={styles.card}
                        onPress={handleAddFarmPress}
                        activeOpacity={0.7}
                    >
                        <View style={[styles.iconContainer, styles.farmIcon]}>
                            <View style={styles.farmHouse}>
                                <View style={styles.farmRoof} />
                                <View style={styles.farmBase} />
                                <View style={styles.farmGround} />
                            </View>
                            <View style={styles.plusIcon}>
                                <Ionicons name="add" size={16} color="#ffffff" />
                            </View>
                        </View>
                        <Text style={styles.cardTitle}>Add Farm</Text>
                    </TouchableOpacity>
                </View>

                {/* Getting Started Section */}
                <View style={styles.gettingStarted}>
                    <Text style={styles.sectionTitle}>Getting Started</Text>
                    <View style={styles.stepContainer}>
                        <View style={styles.step}>
                            <View style={[styles.stepDot, styles.stepActive]} />
                            <Text style={styles.stepText}>Create your farmer profile</Text>
                        </View>
                        <View style={styles.step}>
                            <View style={[styles.stepDot, styles.stepActive]} />
                            <Text style={styles.stepText}>Add your first farm</Text>
                        </View>
                        <View style={styles.step}>
                            <View style={[styles.stepDot, styles.stepInactive]} />
                            <Text style={[styles.stepText, styles.stepTextInactive]}>
                                Start tracking your crops
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Bottom Indicator */}
            <View style={styles.bottomIndicator}>
                <View style={styles.homeIndicator} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f4f6',
    },
    header: {
        backgroundColor: '#1f2937',
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    appIcon: {
        width: 32,
        height: 32,
        backgroundColor: '#22c55e',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    headerTitle: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '600',
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    coinText: {
        color: '#fbbf24',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 8,
    },
    coinIcon: {
        width: 24,
        height: 24,
        backgroundColor: '#fbbf24',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',

    },
    coinSymbol: {
        color: '#1f2937',
        fontSize: 12,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 32,
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
        width: (width - 72) / 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    iconContainer: {
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    profileIcon: {
        backgroundColor: '#dcfce7',
    },
    farmIcon: {
        backgroundColor: '#fed7aa',
        position: 'relative',
    },
    farmHouse: {
        alignItems: 'center',
    },
    farmRoof: {
        width: 24,
        height: 16,
        backgroundColor: '#ea580c',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
    farmBase: {
        width: 20,
        height: 12,
        backgroundColor: '#dc2626',
        marginTop: -2,
    },
    farmGround: {
        width: 32,
        height: 8,
        backgroundColor: '#22c55e',
        borderRadius: 4,
        marginTop: 2,
    },
    plusIcon: {
        position: 'absolute',
        top: -8,
        right: -8,
        width: 20,
        height: 20,
        backgroundColor: '#22c55e',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#1f2937',
        textAlign: 'center',
    },
    gettingStarted: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 24,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2.22,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 14,
        color: '#6b7280',
        marginBottom: 16,
        fontWeight: '500',
    },
    stepContainer: {
        gap: 12,
    },
    step: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    stepDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 12,
    },
    stepActive: {
        backgroundColor: '#22c55e',
    },
    stepInactive: {
        backgroundColor: '#d1d5db',
    },
    stepText: {
        fontSize: 14,
        color: '#374151',
        flex: 1,
    },
    stepTextInactive: {
        color: '#9ca3af',
    },
    bottomIndicator: {
        paddingVertical: 16,
        alignItems: 'center',
    },
    homeIndicator: {
        width: 48,
        height: 4,
        backgroundColor: '#d1d5db',
        borderRadius: 2,
    },
});