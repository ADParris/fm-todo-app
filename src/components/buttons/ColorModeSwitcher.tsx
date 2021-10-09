import {
	useColorMode,
	useColorModeValue,
	IconButton,
	IconButtonProps,
} from '@chakra-ui/react';
import React from 'react';

import { MoonIcon, SunIcon } from 'components';

export const ColorModeSwitcher: React.FC = (
	props: Omit<IconButtonProps, 'aria-label'>
) => {
	const { toggleColorMode } = useColorMode();
	const text = useColorModeValue('dark', 'light');
	const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);

	return (
		<IconButton
			aria-label={`Switch to ${text} mode`}
			h="clamp(30px, 2.5vw, 36px)"
			icon={
				<SwitchIcon
					h="clamp(20px, 1.81vw, 26px)"
					w="clamp(20px, 1.81vw, 26px)"
				/>
			}
			minW="auto"
			onClick={toggleColorMode}
			variant="ghost"
			w="clamp(30px, 2.5vw, 36px)"
			{...props}
		/>
	);
};
