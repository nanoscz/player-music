import { FlatList, FlatListProps, View } from 'react-native'
import TrackListItem from './TrackListItem'
import { Track } from '@/types/Track'
import library from '@/assets/data/library.json'
import { utilsStyles } from '@/styles'

type TracksListProps = Partial<FlatListProps<unknown>>

const itemSeparatorComponent = () => (
	<View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
)

const TracksList = ({ ...flatlistProps }: TracksListProps) => {
	const renderItem = ({ item: track }: { item: Track }) => (
		<TrackListItem track={{ ...track, image: track.artwork }} {...flatlistProps} />
	)

	return (
		<FlatList
			data={library as Track[]}
			renderItem={renderItem}
			ItemSeparatorComponent={itemSeparatorComponent}
			keyExtractor={(item) => item.url}
		/>
	)
}

export default TracksList
