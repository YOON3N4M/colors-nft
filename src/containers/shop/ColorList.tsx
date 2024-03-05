import { Box, SimpleGrid } from '@chakra-ui/react'
import colors from '@/data/pantone-numbers.json'
import ColorCard, { ColorCardType } from '@/components/ColorCard'

interface ColorListProps {
	type: ColorCardType
	filterLightness: string | null
	filterHue: string | null
}

function ColorList(props: ColorListProps) {
	const { type, filterHue, filterLightness } = props

	const colorsArr = Object.entries(colors).map((color) => color)

	function RenderFilteredList() {
		let result = colorsArr

		if (filterHue) {
			result = result.filter((color) => {
				const numbering = color[0]
				const hue = numbering.substring(3, 5)
				let result = false
				if (filterHue) {
					result = hue === filterHue
				}
				return result
			})
		}

		if (filterLightness) {
			result = result.filter((color) => {
				const numbering = color[0]
				const lightness = numbering.substring(0, 2)

				let result = false
				if (filterLightness) {
					result = lightness === filterLightness
				}
				return result
			})
		}

		const cards = result.map((color) => {
			const numbering = color[0]

			const name = color[1].name
			const split = name.split('-')
			const capitalizedName = split
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
				.join(' ')

			const hex = color[1].hex
			return (
				<ColorCard
					name={capitalizedName}
					numbering={numbering}
					hex={hex}
					type={type}
				/>
			)
		})
		return <>{cards}</>
	}
	return (
		<Box mt={4}>
			<SimpleGrid
				display={type === 'text' ? 'flex' : 'grid'}
				flexWrap={type === 'text' ? 'wrap' : 'initial'}
				columns={type === 'card' ? 5 : 6}
				spacingY={type === 'text' ? 0 : 8}
				justifyContent={'center'}
				placeItems={type === 'text' ? 'start' : 'center'}
				gap={type === 'text' ? 2 : 'initial'}
			>
				{/* {colorsArr.map((color) => (
					<ColorCard
						name={color[1].name}
						numbering={color[0]}
						hex={color[1].hex}
					/>
				))} */}
				<RenderFilteredList />
			</SimpleGrid>
		</Box>
	)
}

export default ColorList
