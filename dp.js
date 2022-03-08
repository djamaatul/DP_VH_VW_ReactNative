import { PixelRatio } from 'react-native';

export function dp(dp) {
	return PixelRatio.getPixelSizeForLayoutSize(dp);
}
