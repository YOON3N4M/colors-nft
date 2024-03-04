import { Box, Center, Text } from '@chakra-ui/react'
import React from 'react'

type ColorCardType = 'pantone' | 'square'

interface ColorCardProps {
	numbering: string
	name: string
	hex: string
	type?: ColorCardType
}

export default function ColorCard(props: ColorCardProps) {
	const { numbering, name, hex, type = 'pantone' } = props

	const height = type === 'square' ? '150px' : '160px'

	function nameConvert(str: string) {}

	return (
		<Box maxW={'180px'}>
			<Center h={height} bg={`#${hex}`}></Center>
			<Box
				py={4}
				px={3}
				borderRight={'1px solid #A8A8A8'}
				borderBottom={'1px solid #A8A8A8'}
				borderLeft={'1px solid #A8A8A8'}
			>
				<Text fontWeight={700} fontSize={'x-large'} lineHeight={1.3}>
					PANTONE
				</Text>
				<Text fontWeight={600} lineHeight={1}>
					{numbering}
				</Text>
				<Text fontWeight={600} fontSize={'large'} lineHeight={0.8}>
					{name}
				</Text>
			</Box>
		</Box>
	)
}
