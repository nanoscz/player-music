import { View, ScrollView } from 'react-native'
import { defaultStyles } from '@/styles'
import TracksList from '@/components/TracksList'
import { screenPadding } from '@/constants/tokens'
import { useNavigationSearch } from '@/hooks/useNavigationSearch'
import library from '@/assets/data/library.json'
import { Track } from '@/types/Track'
import { useMemo } from 'react'
import { trackTitleFilter } from '@/helpers/filter'

const SongsScreen = () => {
	const search = useNavigationSearch({ searchBarOptions: { placeholder: 'Find in songs' } })
	const tracks = library as Track[]

	const filteredTracks = useMemo(() => {
		if (!search) return tracks

		return tracks.filter(trackTitleFilter(search))
	}, [search, tracks])

	return (
		<View style={defaultStyles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				contentContainerStyle={{ paddingHorizontal: screenPadding.horizontal }}
			>
				<TracksList scrollEnabled={false} tracks={filteredTracks} />
			</ScrollView>
		</View>
	)
}

export default SongsScreen
