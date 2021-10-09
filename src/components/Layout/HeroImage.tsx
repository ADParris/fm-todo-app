import {
	Flex,
	Image,
	useColorModeValue,
	useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';

import bgDesktopDark from 'assets/images/bg-desktop-dark.jpg';
import bgDesktopLight from 'assets/images/bg-desktop-light.jpg';
import bgMobileDark from 'assets/images/bg-mobile-dark.jpg';
import bgMobileLight from 'assets/images/bg-mobile-light.jpg';

interface IComponentProps {}

export const HeroImage: React.FC<IComponentProps> = () => {
	const [isLargeScreen] = useMediaQuery('(min-width: 600px)');
	const bgDark = isLargeScreen ? bgDesktopDark : bgMobileDark;
	const bgLight = isLargeScreen ? bgDesktopLight : bgMobileLight;
	const image = useColorModeValue(bgLight, bgDark);

	return (
		<Flex
			h="clamp(200px, 20.84vw, 300px)"
			left={0}
			position="absolute"
			top={0}
			w="full"
			zIndex={-1}
		>
			<Image alt="hero image" flex={1} src={image} />
		</Flex>
	);
};
