// @flow

import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Positions } from '../constants/Constants';

import { DialogTitleType } from '../Type';

const DEFAULT_TITLE_ALIGN: string = 'center';
const HAVE_TITLE_BAR: bool = true;

function DialogTitle({ title, titleStyle, titleTextStyle, haveTitleBar, titleAlign }: DialogTitleType) {
  const titleBar = haveTitleBar ? styles.titleBar : null;
  const titleItemsAlign = { alignItems: Positions[titleAlign] };

  return (
    <View style={[styles.title, titleItemsAlign, titleBar, titleStyle]}>
      <Text style={[styles.titleText, titleTextStyle]}>
        {title}
      </Text>
    </View>
  );
}

DialogTitle.defaultProps = {
  titleAlign: DEFAULT_TITLE_ALIGN,
  haveTitleBar: HAVE_TITLE_BAR,
};

const styles = StyleSheet.create({
  title: {
    padding: 24,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  titleBar: {
    padding: 14,
    borderBottomWidth: 0.5,
    backgroundColor: '#F9F9FB',
    borderColor: '#DAD9DC',
  },
  titleText: {
    color: '#7F7D89',
    fontSize: 16,
  },
});

export default DialogTitle;
