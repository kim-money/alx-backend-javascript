export default function groceriesList() {
  const groceriesList = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  const groceriesListMap = new Map(groceriesList);
  return groceriesListMap;
}
