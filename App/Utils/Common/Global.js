import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const ScreenWidth = width;
export const ScreenHeight = height;

export const BASE_URL = "https://www.reddit.com/r/swift/.json"
