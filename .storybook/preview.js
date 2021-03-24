import '../sass/tailwindcss.sass';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#fffff',
      },
      {
        name: 'blue',
        value: '#1C3FAA',
      },
      {
        name: 'orange',
        value: '#ff7200',
      },
      {
        name: 'green',
        value: '#006252',
      }
    ],
  },
}