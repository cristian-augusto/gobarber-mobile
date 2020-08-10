import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px 30px;
`;
export const BackButton = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 16px 0;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 18px;
`;
export const UserAvatar = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 70px;
  align-self: center;
`;
