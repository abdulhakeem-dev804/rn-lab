// examples/FlexExamples.jsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const FlexExamples = () => {
  const [selectedExample, setSelectedExample] = useState('flexDirection-column');

  // Define all examples with their configurations and descriptions
  const examples = {
    'flexDirection-column': {
      title: 'FlexDirection: Column',
      description: 'Items are arranged vertically from top to bottom. This is the default direction in React Native.',
      containerStyle: { flexDirection: 'column' },
    },
    'flexDirection-row': {
      title: 'FlexDirection: Row',
      description: 'Items are arranged horizontally from left to right.',
      containerStyle: { flexDirection: 'row' },
    },
    'flexDirection-column-reverse': {
      title: 'FlexDirection: Column-Reverse',
      description: 'Items are arranged vertically from bottom to top.',
      containerStyle: { flexDirection: 'column-reverse' },
    },
    'flexDirection-row-reverse': {
      title: 'FlexDirection: Row-Reverse',
      description: 'Items are arranged horizontally from right to left.',
      containerStyle: { flexDirection: 'row-reverse' },
    },
    'justifyContent-flex-start': {
      title: 'JustifyContent: Flex-Start',
      description: 'Items are packed at the start of the main axis (top for column, left for row).',
      containerStyle: { flexDirection: 'row', justifyContent: 'flex-start' },
    },
    'justifyContent-center': {
      title: 'JustifyContent: Center',
      description: 'Items are centered along the main axis.',
      containerStyle: { flexDirection: 'row', justifyContent: 'center' },
    },
    'justifyContent-flex-end': {
      title: 'JustifyContent: Flex-End',
      description: 'Items are packed at the end of the main axis (bottom for column, right for row).',
      containerStyle: { flexDirection: 'row', justifyContent: 'flex-end' },
    },
    'justifyContent-space-between': {
      title: 'JustifyContent: Space-Between',
      description: 'Items are evenly distributed with first item at start and last item at end.',
      containerStyle: { flexDirection: 'row', justifyContent: 'space-between' },
    },
    'justifyContent-space-around': {
      title: 'JustifyContent: Space-Around',
      description: 'Items are evenly distributed with equal space around them.',
      containerStyle: { flexDirection: 'row', justifyContent: 'space-around' },
    },
    'justifyContent-space-evenly': {
      title: 'JustifyContent: Space-Evenly',
      description: 'Items are evenly distributed with equal space between them.',
      containerStyle: { flexDirection: 'row', justifyContent: 'space-evenly' },
    },
    'alignItems-flex-start': {
      title: 'AlignItems: Flex-Start',
      description: 'Items are aligned at the start of the cross axis (left for column, top for row).',
      containerStyle: { flexDirection: 'column', alignItems: 'flex-start' },
    },
    'alignItems-center': {
      title: 'AlignItems: Center',
      description: 'Items are centered along the cross axis.',
      containerStyle: { flexDirection: 'column', alignItems: 'center' },
    },
    'alignItems-flex-end': {
      title: 'AlignItems: Flex-End',
      description: 'Items are aligned at the end of the cross axis (right for column, bottom for row).',
      containerStyle: { flexDirection: 'column', alignItems: 'flex-end' },
    },
    'alignItems-stretch': {
      title: 'AlignItems: Stretch',
      description: 'Items STRETCH to fill the entire height of the container. Notice how all boxes are the same height even though they have different content! This only works when items don\'t have a fixed height.',
      containerStyle: { flexDirection: 'row', alignItems: 'stretch' },
      stretchExample: true,
    },
    'flexWrap-nowrap': {
      title: 'FlexWrap: NoWrap',
      description: 'Items stay in a single line and may overflow the container.',
      containerStyle: { flexDirection: 'row', flexWrap: 'nowrap' },
      manyItems: true,
    },
    'flexWrap-wrap': {
      title: 'FlexWrap: Wrap',
      description: 'Items wrap to multiple lines if they exceed container width.',
      containerStyle: { flexDirection: 'row', flexWrap: 'wrap' },
      manyItems: true,
    },
    'flex-values': {
      title: 'Flex Values',
      description: 'The "flex" property controls how much space each item takes. Box 1 has flex: 1, Box 2 has flex: 2 (twice as wide), Box 3 has flex: 1. Total = 4 parts, so Box 2 takes 2/4 = 50% of the space!',
      containerStyle: { flexDirection: 'row' },
      customItems: [
        { label: '1', flex: 1, ratio: '25%' },
        { label: '2', flex: 2, ratio: '50%' },
        { label: '3', flex: 1, ratio: '25%' },
      ],
    },
  };

  const currentExample = examples[selectedExample];
  const itemCount = currentExample.manyItems ? 6 : 3;

  return (
    <View style={styles.container}>
      {/* Example buttons - Scrollable horizontally */}
      <View style={styles.buttonsWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.buttonsContainer}
        >
          {Object.keys(examples).map((key) => (
            <TouchableOpacity
              key={key}
              style={[
                styles.exampleButton,
                selectedExample === key && styles.exampleButtonActive,
              ]}
              onPress={() => setSelectedExample(key)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.exampleText,
                  selectedExample === key && styles.exampleTextActive,
                ]}
              >
                {examples[key].title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Example demonstration area */}
      <ScrollView style={styles.demoSection} showsVerticalScrollIndicator={false}>
        <Text style={styles.demoTitle}>{currentExample.title}</Text>
        <Text style={styles.description}>{currentExample.description}</Text>

        {/* Visual demonstration */}
        <View style={styles.demoContainer}>
          <View style={[styles.flexContainer, currentExample.containerStyle]}>
            {currentExample.customItems ? (
              // Render custom items with different flex values
              currentExample.customItems.map((item, index) => (
                <View
                  key={index}
                  style={[
                    styles.flexBox,
                    { flex: item.flex, backgroundColor: getBoxColor(index) },
                  ]}
                >
                  <Text style={styles.boxText}>Box {item.label}</Text>
                  <Text style={styles.boxFlexText}>flex: {item.flex}</Text>
                  <Text style={styles.boxRatioText}>{item.ratio}</Text>
                </View>
              ))
            ) : currentExample.stretchExample ? (
              // Render stretch example with different content sizes
              ['Small', 'Medium\nText', 'Large\nText\nHere'].map((text, index) => (
                <View
                  key={index}
                  style={[
                    styles.stretchBox,
                    { backgroundColor: getBoxColor(index) },
                  ]}
                >
                  <Text style={styles.boxText}>{text}</Text>
                  <Text style={styles.stretchLabel}>Stretched!</Text>
                </View>
              ))
            ) : (
              // Render standard items
              Array.from({ length: itemCount }).map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.box,
                    { backgroundColor: getBoxColor(index) },
                  ]}
                >
                  <Text style={styles.boxText}>Box {index + 1}</Text>
                </View>
              ))
            )}
          </View>
        </View>

        {/* Code snippet */}
        <View style={styles.codeSection}>
          <Text style={styles.codeLabel}>Container Style:</Text>
          <Text style={styles.codeText}>
            {JSON.stringify(currentExample.containerStyle, null, 2)}
          </Text>
        </View>

        {/* Full Code Example */}
        <View style={styles.fullCodeSection}>
          <View style={styles.codeHeader}>
            <Text style={styles.codeLabel}>Full Code Example:</Text>
            <Text style={styles.copyHint}>Tap to select & copy</Text>
          </View>
          <Text style={styles.codeText} selectable={true}>
            {`import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Example = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>Box 1</Text>
      </View>
      <View style={styles.box}>
        <Text>Box 2</Text>
      </View>
      <View style={styles.box}>
        <Text>Box 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ${Object.entries(currentExample.containerStyle)
      .map(([key, value]) => `${key}: '${value}'`)
      .join(',\n    ')}
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: '#4F46E5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});

export default Example;`}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

// Helper function to get different colors for boxes
const getBoxColor = (index) => {
  const colors = [
    '#EF4444', // Red
    '#F59E0B', // Amber
    '#10B981', // Emerald
    '#3B82F6', // Blue
    '#8B5CF6', // Purple
    '#EC4899', // Pink
  ];
  return colors[index % colors.length];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFBFC',
  },
  buttonsWrapper: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingBottom: 16,
  },
  buttonsContainer: {
    paddingHorizontal: 20,
    gap: 10,
  },
  exampleButton: {
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 8,
    backgroundColor: '#F9FAFB',
  },
  exampleButtonActive: {
    backgroundColor: '#111827',
  },
  exampleText: {
    fontSize: 13,
    color: '#6B7280',
    fontWeight: '600',
    letterSpacing: -0.1,
  },
  exampleTextActive: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  demoSection: {
    flex: 1,
    padding: 20,
  },
  demoTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 6,
    color: '#111827',
    letterSpacing: -0.4,
  },
  description: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 18,
    lineHeight: 21,
  },
  demoContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 18,
    height: 300,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  flexContainer: {
    flex: 1,
    backgroundColor: '#FAFBFC',
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    borderStyle: 'dashed',
    borderRadius: 12,
    padding: 10,
  },
  box: {
    minWidth: 68,
    minHeight: 68,
    maxWidth: 68,
    maxHeight: 68,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    margin: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
  },
  flexBox: {
    minHeight: 105,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    margin: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
  },
  stretchBox: {
    width: 88,
    // NO fixed height - this allows it to STRETCH!
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    margin: 4,
    paddingVertical: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  boxText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
    textAlign: 'center',
  },
  boxFlexText: {
    color: '#FFFFFF',
    fontSize: 10,
    marginTop: 2,
    fontWeight: '600',
  },
  stretchLabel: {
    color: '#FFFFFF',
    fontSize: 10,
    marginTop: 6,
    fontWeight: '700',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  boxRatioText: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: 4,
    fontWeight: '700',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  codeSection: {
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    padding: 16,
  },
  fullCodeSection: {
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
    marginBottom: 20,
  },
  codeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  codeLabel: {
    color: '#22C55E',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  copyHint: {
    color: '#6B7280',
    fontSize: 10,
    fontStyle: 'italic',
  },
  codeText: {
    color: '#E5E5E5',
    fontSize: 12,
    fontFamily: 'monospace',
    lineHeight: 19,
  },
});

export default FlexExamples;
