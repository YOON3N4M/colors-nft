import React, { useState } from 'react'
import colors from '@/data/pantone-numbers.json'
import Contents from '@/components/layout/Contents'
import { Box, SimpleGrid } from '@chakra-ui/react'
import ColorCard, { ColorCardType } from '@/components/ColorCard'
import FilterColor from './FilterColor'
import ColorList from './ColorList'

export default function ContainerShop() {
	const [type, setType] = useState<ColorCardType>('card')
	const [filterLightness, setFilterLightness] = useState<string | null>(null)
	const [filterHue, setFilterHue] = useState<string | null>('01')

	return (
		<Contents>
			<FilterColor
				type={type}
				filterLightness={filterLightness}
				filterHue={filterHue}
				setType={setType}
				setFilterLightness={setFilterLightness}
				setFilterHue={setFilterHue}
			/>
			<Box textAlign={'end'} color={'gray'}></Box>
			<Box maxH={'1000px'} overflowY={'auto'}>
				<ColorList
					type={type}
					filterHue={filterHue}
					filterLightness={filterLightness}
				/>
			</Box>
		</Contents>
	)
}
