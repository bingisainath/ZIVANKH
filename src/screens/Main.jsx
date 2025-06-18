import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppStyles from './styles';
import CustomButton from '../components/CustomButton';
import IMAGES from '../constants/images';
import STRINGS from '../constants/englishValues';
import COLORS from '../constants/colors';

const Main = () => {
  return (
    <LinearGradient
      colors={[
        COLORS.GRADIENT_START,
        COLORS.GRADIENT_MID1,
        COLORS.GRADIENT_MID2,
        COLORS.GRADIENT_END,
      ]}
      style={AppStyles.container}
    >
      {/* Header */}
      <View style={AppStyles.header}>
        <Image source={IMAGES.COMPANY_LOGO} style={AppStyles.logo} />
        <View style={AppStyles.headerButtons}>
          <TouchableOpacity style={AppStyles.languageBtn}>
            <Text style={AppStyles.languageText}>{STRINGS.LANGUAGE}</Text>
            <View style={AppStyles.verticalLine} />
            <Image
              source={IMAGES.LANGUAGE_ICON}
              style={AppStyles.languageIcon}
            />
          </TouchableOpacity>
          <CustomButton
            style={AppStyles.backBtn}
            icon={IMAGES.BACK_ARROW}
            iconStyle={AppStyles.arrowIcon}
            label={STRINGS.BACK}
            textStyle={{ color: '#fff', fontWeight: 500, fontSize: 12 }}
          />
        </View>
      </View>

      {/* Body */}
      <View style={AppStyles.bodyContainer}>
        <Text style={AppStyles.welcomeText}>{STRINGS.WELCOME}</Text>
        <View style={AppStyles.buttonsContainer}>
          <CustomButton
            style={AppStyles.uploadButton}
            icon={IMAGES.ADD_FILE}
            iconStyle={AppStyles.uploadIcon}
            label={STRINGS.UPLOAD_REPORTS}
            textStyle={{ fontWeight: '500' }}
          />
          <CustomButton
            style={AppStyles.talkButton}
            icon={IMAGES.TALK_ICON}
            iconStyle={AppStyles.uploadIcon}
            label={STRINGS.TALK_TO_BOT}
            textStyle={{ color: '#fff', fontWeight: '500' }}
          />
        </View>
      </View>

      {/* Footer */}
      <View style={{ position: 'relative', bottom: 0 }}>
        <Image source={IMAGES.DOCTOR} style={AppStyles.doctorImageSize} />
      </View>
    </LinearGradient>
  );
};

export default Main;
