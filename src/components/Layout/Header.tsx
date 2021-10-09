import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

import { ColorModeSwitcher } from 'components';

interface IComponentProps {}

export const Header: React.FC<IComponentProps> = () => {
	return (
		<Flex as="header" justifyContent="space-between" w="full">
			<Text
				fontSize="clamp(20px, 2.78vw, 40px)"
				fontWeight="bold"
				lineHeight={1}
			>
				T O D O
			</Text>
			<ColorModeSwitcher />
		</Flex>
	);
};
