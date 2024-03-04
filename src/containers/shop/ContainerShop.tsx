import React from 'react'
import colors from '@/data/pantone-numbers.json'
import Contents from '@/components/layout/Contents'
import { Box, SimpleGrid } from '@chakra-ui/react'
import ColorCard from '@/components/ColorCard'

export default function ContainerShop() {
	const colorsArr = Object.entries(colors).map((color) => color)

	return (
		<Contents>
			<Box>
				<Box>View</Box>
			</Box>
			<Box>
				<Box>Filter</Box>
			</Box>
			<Box>Colors ({colorsArr.length})</Box>
			<Box maxH={'1000px'} overflowY={'auto'}>
				<SimpleGrid columns={5} spacingY={8}>
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
