import { View } from 'react-native'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'

const PlaylistsScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen name="index" options={{ headerTitle: 'Playlist' }} />
			</Stack>
		</View>
	)
}

export default PlaylistsScreenLayout
