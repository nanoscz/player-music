import { View, Text } from 'react-native'
import { defaultStyles } from '@/styles'

const SongsScreen = () => {
	return (
		<View style={defaultStyles.container}>
			<Text style={[defaultStyles.text, { marginTop: 100 }]}>SongsScreen</Text>
		</View>
	)
}

export default SongsScreen
