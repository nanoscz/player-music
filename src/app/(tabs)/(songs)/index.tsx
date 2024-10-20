import { View, ScrollView } from 'react-native'
import { defaultStyles } from '@/styles'
import TracksList from '@/components/TracksList'
import { screenPadding } from '@/constants/tokens'

const SongsScreen = () => {
	return (
		<View style={defaultStyles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				contentContainerStyle={{ paddingHorizontal: screenPadding.horizontal }}
			>
				<TracksList scrollEnabled={false} />
			</ScrollView>
		</View>
	)
}

export default SongsScreen
