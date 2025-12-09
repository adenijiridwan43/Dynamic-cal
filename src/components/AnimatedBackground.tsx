import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';

export const AnimatedBackground: React.FC = () => {
  const { width, height } = Dimensions.get('window');
  const PARTICLE_SIZE = 4;

  const particlesRef = useRef(
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      opacity: new Animated.Value(0.3),
      // use numeric pixel positions to avoid style/type issues
      left: Math.random() * (width - PARTICLE_SIZE),
      top: Math.random() * (height - PARTICLE_SIZE),
    }))
  );
  const particles = particlesRef.current;

  // store running animations so we can stop them on unmount
  const animationsRef = useRef<Animated.CompositeAnimation[]>([]);

  useEffect(() => {
    particles.forEach((particle, index) => {
      const loopAnim = Animated.loop(
        Animated.sequence([
          Animated.timing(particle.opacity, {
            toValue: 0.6,
            duration: 1000 + Math.random() * 1000,
            delay: index * 100,
            useNativeDriver: true,
          }),
          Animated.timing(particle.opacity, {
            toValue: 0.3,
            duration: 1000 + Math.random() * 1000,
            useNativeDriver: true,
          }),
        ])
      );
      animationsRef.current.push(loopAnim);
      loopAnim.start();
    });

    return () => {
      // cleanup: stop all animations
      animationsRef.current.forEach((anim) => {
        try {
          anim.stop();
        } catch {
          /* ignore stop errors */
        }
      });
    };
  }, []); // run once

  return (
    <View style={styles.container} pointerEvents="none">
      {particles.map((particle) => (
        <Animated.View
          key={particle.id}
          style={[
            styles.particle,
            {
              opacity: particle.opacity,
              left: particle.left,
              top: particle.top,
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },
  particle: {
    position: 'absolute',
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#a78bfa',
  },
});
