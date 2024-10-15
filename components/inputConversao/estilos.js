import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  grupoInput: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    marginVertical: 10,
    marginHorizontal: 25,
  },
  label: {
    width: '35%',

    flex: 0,

    color: '#343434',
    backgroundColor: 'lightgreen',

    textAlign: 'center',

    paddingVertical: 10,
    paddingHorizontal: 8,
    marginRight: 12,
    borderRadius: 8,
  },
  input: {
    width: '65%',
    height: 45,

    flex: 1,

    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#a2a2a2',

    paddingLeft: 8,

    color: '#333333',
    backgroundColor: 'white',
  },
});

export default estilo;