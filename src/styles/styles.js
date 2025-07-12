import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    keyboardContainer: {
        flex: 1,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    loadingText: {
        fontSize: 18,
        color: '#333',
    },
    screenContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
        minHeight: Dimensions.get('window').height - 100,
    },
    tabletScreenContainer: {
        paddingHorizontal: 40,
        paddingVertical: 30,
    },
    landscapeScreenContainer: {
        paddingVertical: 20,
    },
    formContainer: {
        backgroundColor: 'white',
        padding: 30,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 8,
        maxWidth: 400,
        alignSelf: 'center',
        width: '100%',
    },
    tabletFormContainer: {
        padding: 40,
        borderRadius: 20,
        maxWidth: 600,
        shadowRadius: 8,
        elevation: 12,
    },
    landscapeFormContainer: {
        maxWidth: 800,
        padding: 25,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
        color: '#333',
    },
    tabletTitle: {
        fontSize: 36,
        marginBottom: 40,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 15,
        marginBottom: 15,
        borderRadius: 10,
        fontSize: 16,
        backgroundColor: '#fafafa',
    },
    tabletInput: {
        padding: 20,
        fontSize: 18,
        borderRadius: 12,
        marginBottom: 20,
    },
    landscapeInput: {
        flex: 1,
        marginHorizontal: 5,
    },
    landscapeInputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    tabletButton: {
        padding: 20,
        borderRadius: 12,
        marginTop: 20,
    },
    buttonDisabled: {
        backgroundColor: '#ccc',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    tabletButtonText: {
        fontSize: 20,
    },
    linkButton: {
        marginTop: 20,
        alignItems: 'center',
        padding: 10,
    },
    linkText: {
        color: '#007AFF',
        fontSize: 16,
        textAlign: 'center',
    },
    tabletLinkText: {
        fontSize: 18,
    },
    homeContainer: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    homeScrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
    },
    tabletHomeScrollContainer: {
        padding: 40,
        maxWidth: 800,
        alignSelf: 'center',
        width: '100%',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
        color: '#333',
    },
    tabletWelcomeText: {
        fontSize: 32,
        marginBottom: 40,
    },
    userInfoContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 15,
        marginBottom: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 8,
    },
    tabletUserInfoContainer: {
        padding: 30,
        borderRadius: 20,
        marginBottom: 40,
        shadowRadius: 8,
        elevation: 12,
    },
    landscapeUserInfoContainer: {
        padding: 35,
    },
    userInfoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#333',
    },
    tabletUserInfoTitle: {
        fontSize: 24,
        marginBottom: 20,
    },
    userInfoContent: {
        flexDirection: 'column',
    },
    landscapeUserInfoContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    userInfoColumn: {
        flex: 1,
    },
    landscapeUserInfoColumn: {
        flex: 1,
        marginHorizontal: 10,
    },
    userInfo: {
        fontSize: 16,
        marginBottom: 10,
        color: '#666',
        lineHeight: 22,
    },
    tabletUserInfo: {
        fontSize: 18,
        marginBottom: 12,
        lineHeight: 26,
    },
    logoutButton: {
        backgroundColor: '#FF3B30',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
        minWidth: 200,
    },
    tabletLogoutButton: {
        padding: 20,
        borderRadius: 12,
        minWidth: 250,
    },
});