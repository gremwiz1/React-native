import { Dimensions} from 'react-native';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const guidelineBaseWidth = 350;

export function Normalize(size) {
    const newSize = SCREEN_WIDTH / guidelineBaseWidth * size;
    return newSize;

}