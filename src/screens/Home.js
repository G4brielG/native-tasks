import React from "react";
import {
	Text,
	Link,
	HStack,
	Center,
	Heading,
	NativeBaseProvider,
	VStack,
	Box,
	Pressable,
	Button
} from "native-base";
import { ToggleDarkMode } from './../components';

const Home = ({ navigation }) => {
	return (
		<NativeBaseProvider>
			<Center
				_dark={{ bg: "blueGray.900" }}
				_light={{ bg: "blueGray.50" }}
				px={4}
				flex={1}
			>
				<VStack space={5} alignItems="center">
					<Heading size="lg">¡Bienvenido!</Heading>
					<HStack space={2} alignItems="center">
						<Text>Edita</Text>
						<Box
							_web={{
							_text: {
								fontFamily: "monospace",
								fontSize: "sm",
							},
							}}
							px={2}
							py={1}
							_dark={{ bg: "blueGray.800" }}
							_light={{ bg: "blueGray.200" }}
						>
							tu proyecto
						</Box>
						<Text>y guárdalo para volver a cargar.</Text>
					</HStack>
					<Link href="https://docs.nativebase.io" isExternal>
						<Text color="primary.500" underline fontSize={20}>
							Enlace externo
						</Text>
					</Link>
					<ToggleDarkMode />

					<Button colorScheme="success" onPress={() => navigation.navigate('Demo')}>Demo 1</Button>
					<Pressable
						onPress={() => navigation.navigate('Demo')}
						style={{ backgroundColor: 'plum', padding: 10, marginBottom: 10, marginTop: 10 }}
					>
						<Text>Demo 2</Text>
					</Pressable>
				</VStack>
			</Center>
		</NativeBaseProvider>
	);
}

export default Home;