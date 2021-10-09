import { Flex } from '@chakra-ui/react';
import React from 'react';

import { Footer } from './Footer';
import { Header } from './Header';
import { HeroImage } from './HeroImage';
import { Main } from './Main';

interface IComponentProps {}

export const Layout: React.FC<IComponentProps> = ({ children }) => {
	return (
		<Flex minH="100vh">
			<HeroImage />
			<Flex flex={1} justifyContent="center">
				<Flex
					alignItems="center"
					flex={1}
					flexDir="column"
					maxW="clamp(320px, 37.5vw, 540px)"
					mt="clamp(48px, 4.87vw, 70px)"
					mx="26px"
				>
					<Header />
					<Main>{children}</Main>
					<Footer />
				</Flex>
			</Flex>
		</Flex>
	);
};
