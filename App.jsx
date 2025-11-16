// App.jsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FlexExamples from './examples/FlexExamples';

const App = () => {
  const [screen, setScreen] = useState('home'); // 'home' | 'flexExamples'

  if (screen === 'flexExamples') {
    return (
      <View style={{ flex: 1 }}>
        <Header title="Flex Examples" onBack={() => setScreen('home')} />
        <FlexExamples />
      </View>
    );
  }

  // Home screen
  return (
    <View style={styles.homeContainer}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>⚡</Text>
      </View>
      <Text style={styles.homeTitle}>React Native Examples</Text>
      <Text style={styles.homeSubtitle}>
        Interactive visual examples to master React Native components and layouts
      </Text>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => setScreen('flexExamples')}
          activeOpacity={0.8}
        >
          <Text style={styles.linkText}>Flex Examples</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.linkButtonDisabled}
          activeOpacity={1}
        >
          <Text style={styles.linkTextDisabled}>Animations</Text>
          <Text style={styles.comingSoonBadge}>Coming Soon</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.linkButtonDisabled}
          activeOpacity={1}
        >
          <Text style={styles.linkTextDisabled}>Components</Text>
          <Text style={styles.comingSoonBadge}>Coming Soon</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.linkButtonDisabled}
          activeOpacity={1}
        >
          <Text style={styles.linkTextDisabled}>Navigation</Text>
          <Text style={styles.comingSoonBadge}>Coming Soon</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Reusable header with back button
const Header = ({ title, onBack }) => (
  <View style={styles.header}>
    <View style={styles.headerContent}>
      <TouchableOpacity
        onPress={onBack}
        activeOpacity={0.6}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Text style={styles.backIcon}>←</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFBFC',
    padding: 24,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 28,
  },
  icon: {
    fontSize: 52,
  },
  homeTitle: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 10,
    color: '#111827',
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  homeSubtitle: {
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
    paddingHorizontal: 40,
  },
  buttonGroup: {
    width: '100%',
    paddingHorizontal: 32,
    gap: 12,
  },
  linkButton: {
    paddingHorizontal: 36,
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: '#111827',
    alignItems: 'center',
  },
  linkButtonDisabled: {
    paddingHorizontal: 36,
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  linkText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
    letterSpacing: -0.2,
  },
  linkTextDisabled: {
    fontSize: 16,
    color: '#9CA3AF',
    fontWeight: '600',
    letterSpacing: -0.2,
  },
  comingSoonBadge: {
    fontSize: 11,
    color: '#6B7280',
    fontWeight: '600',
    backgroundColor: '#E5E7EB',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  header: {
    paddingTop: 56,
    paddingBottom: 14,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  backIcon: {
    fontSize: 24,
    color: '#111827',
    fontWeight: '400',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#111827',
    letterSpacing: -0.2,
  },
});

export default App;
