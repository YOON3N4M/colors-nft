import { Box, Center, Text } from '@chakra-ui/react'
import { Variants, motion } from 'framer-motion'
import React from 'react'

export type ColorCardType = 'card' | 'square'

interface ColorCardProps {
	numbering: string
	name: string
	hex: string
	type: ColorCardType
}

export default function ColorCard(props: ColorCardProps) {
	const { numbering, name, hex, type = 'card' } = props

	const height = type === 'square' ? '180px' : '160px'

	const scrollFadeInVariants: Variants = {
		offscreen: {
			opacity: 0,
		},
		onscreen: {
			opacity: 1,
			transition: {
				duration: 0.8,
			},
		},
	}

	function nameConvert(str: string) {}

	return (
		<Box
			as={motion.div}
			w="180px"
			maxW={'180px'}
			initial="offscreen"
			whileInView="onscreen"
			variants={scrollFadeInVariants}
		>
			<Center h={height} bg={`#${hex}`}></Center>
			{type === 'card' && (
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
			)}
		</Box>
	)
}
