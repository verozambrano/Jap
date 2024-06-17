import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Insect {
  id: number;
  name: string;
}

const MainPage: React.FC = () => {
  const [insects, setInsects] = useState<Insect[]>([
    { id: 1, name: 'Insecto 1' },
    { id: 2, name: 'Insecto 2' },
    { id: 3, name: 'Insecto 3' },
  ]);
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(60);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      saveScore(score); // Asegúrate de que saveScore esté definida en algún lugar
    }
  }, [timeLeft]);

  const handleCatchInsect = (id: number) => {
    setInsects(insects.filter(insect => insect.id !== id));
    setScore(score + 1);
  };

  const saveScore = (score: number) => {
    // Implementa la lógica para guardar el puntaje
    console.log("Puntaje guardado:", score);
  };

  return (
    <View style={styles.container}>
      <Text>Tiempo restante: {timeLeft}</Text>
      <Text>Puntaje: {score}</Text>
      {insects.map((insect) => (
        <TouchableOpacity key={insect.id} onPress={() => handleCatchInsect(insect.id)}>
          <Text style={styles.insect}>{insect.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  insect: {
    fontSize: 24,
    margin: 10,
  },
});

export default MainPage;