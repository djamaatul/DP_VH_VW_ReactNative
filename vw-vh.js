import { Dimensions } from 'react-native';

export function vh(persen) {
	return (Dimensions.get('window').height * persen) / 100;
}
export function vw(persen) {
	return (Dimensions.get('window').width * persen) / 100;
}
