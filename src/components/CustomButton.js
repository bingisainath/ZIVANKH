import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';

const CustomButton = ({
  icon,
  label,
  onPress,
  style,
  textStyle,
  iconStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      {icon && <Image source={icon} style={iconStyle} />}
      <Text style={textStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
