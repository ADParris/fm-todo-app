import { Flex } from '@chakra-ui/react';
import React from 'react';

interface IComponentProps {}

export const Main: React.FC<IComponentProps> = ({ children }) => {
	return (
		<Flex
			as="main"
			flexDir="column"
			mt="clamp(40px, 3.34vw, 48px)"
			w="full"
		>
			{children}
		</Flex>
	);
};
