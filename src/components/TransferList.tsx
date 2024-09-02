// src/components/TransferList.tsx
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, List } from 'react-native-paper';

interface Item {
  id: string;
  title: string;
}

interface TransferListProps {
  items: Item[];
  onTransfer: (selectedItems: Item[]) => void;
}

const TransferList: React.FC<TransferListProps> = ({ items, onTransfer }) => {
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);

  const toggleItem = (item: Item) => {
    setSelectedItems((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  const transferSelected = () => {
    onTransfer(selectedItems);
    setSelectedItems([]);
  };

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title title="Transfer List" />
        <Card.Content>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => toggleItem(item)}>
                <List.Item
                  title={item.title}
                  style={{
                    backgroundColor: selectedItems.includes(item) ? '#e0e0e0' : 'white',
                  }}
                />
              </TouchableOpacity>
            )}
          />
        </Card.Content>
        <Card.Actions>
          <TouchableOpacity onPress={transferSelected} style={styles.button}>
            <Text style={styles.buttonText}>Transfer</Text>
          </TouchableOpacity>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  button: {
    backgroundColor: '#6200ee',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});

export default TransferList;
