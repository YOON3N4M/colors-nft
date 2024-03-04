import ContainerHome from '@/containers/ContainerHome'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<ContainerHome />
		</>
	)
}
