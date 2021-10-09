import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

interface IComponentProps {}

export const Footer: React.FC<IComponentProps> = () => {
	return (
		<Flex as="footer">
			<Text>Footer</Text>
		</Flex>
	);
};
