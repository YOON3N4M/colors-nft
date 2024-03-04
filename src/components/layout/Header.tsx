import { Box, Center, Flex } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
	return (
		<Box position={'sticky'} top={'0px'} bg={'white'}>
			<Flex maxW={'1280px'} m="0 auto" gap={16}>
				<Center py={4}>Colors</Center>
				<Center>Shop</Center>
			</Flex>
		</Box>
	)
}
