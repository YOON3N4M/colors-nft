import React, { useState } from 'react'
import colors from '@/data/pantone-numbers.json'
import Contents from '@/components/layout/Contents'
import { Box, SimpleGrid } from '@chakra-ui/react'
import ColorCard, { ColorCardType } from '@/components/ColorCard'
import FilterColor from './FilterColor'

export default function ContainerShop() {
	const colorsArr = Object.entries(colors).map((color) => color)

	const [type, setType] = useState<ColorCardType>('card')
	const [filterLightness, setFilterLightness] = useState<string | null>(null)
	const [filterHue, setFilterHue] = useState<string | null>(null)

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
			<Box textAlign={'end'} color={'gray'}>
				{colorsArr.length}
			</Box>
			<Box maxH={'1000px'} overflowY={'auto'}>
				<SimpleGrid
					columns={5}
					spacingY={8}
					justifyContent={'center'}
					placeItems={'center'}
				>
					{colorsArr.map((color) => (
						<ColorCard
							name={color[1].name}
							numbering={color[0]}
							hex={color[1].hex}
						/>
					))}
				</SimpleGrid>
			</Box>
		</Contents>
	)
}
