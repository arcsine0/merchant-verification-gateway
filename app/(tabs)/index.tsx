import { Text, View, Image, StyleSheet, Platform } from 'react-native';

import { ThemedText } from '@/components/ThemedText';

export default function HomeScreen() {
	return (
		<View className='flex-1 items-center justify-center'>
			<ThemedText type='title'>Home</ThemedText>
		</View>
	);
}