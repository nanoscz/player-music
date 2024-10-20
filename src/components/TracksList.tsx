import { FlatList, FlatListProps, Text, View } from 'react-native'
import TrackListItem from './TrackListItem'
import { Track } from '@/types/Track'
import { utilsStyles } from '@/styles'

type TracksListProps = Partial<FlatListProps<unknown>> & {
	tracks: Track[]
}

const itemSeparatorComponent = () => (
	<View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
)

const listEmptyComponent = () => {
	return (
		<View>
			<Text style={utilsStyles.emptyContentText}>No tracks found</Text>
		</View>
	)
}

const TracksList = ({ tracks, ...flatlistProps }: TracksListProps) => {
	const renderItem = ({ item: track }: { item: Track }) => (
		<TrackListItem track={{ ...track, image: track.artwork }} {...flatlistProps} />
	)

	return (
		<FlatList
			data={tracks}
			contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
			renderItem={renderItem}
			ItemSeparatorComponent={itemSeparatorComponent}
			ListFooterComponent={itemSeparatorComponent}
			ListEmptyComponent={listEmptyComponent}
		/>
	)
}

export default TracksList
