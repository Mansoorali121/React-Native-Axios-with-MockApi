import { Dimensions } from 'react-native';

const { width: deviceWidth, height: deviceheight } = Dimensions.get('window');

export const hp = percentatage => {
  return (percentatage * deviceheight) / 100;
};

export const wp = percentatage => {
  return (percentatage * deviceWidth) / 100;
};
