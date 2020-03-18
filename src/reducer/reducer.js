import { ADD_FEATURE, REMOVE_FEATURE } from "../actions/actions";
//26395
export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export const reducer = (state = initialState, action) => {
  console.log(state.car.features);
  switch (action.type) {
    //NOTE ADD //
    case ADD_FEATURE:
      if (state.car.features.includes(action.payload)) {
        return state;
      }
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.payload.price,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload]
        }
      };

    //NOTE REMOVE //
    case REMOVE_FEATURE:
      const newFeatures = state.car.features.filter(item => {
        return item !== action.payload;
      });
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.payload.price,
        car: {
          ...state.car,
          features: newFeatures
        }
      };
    default:
      return state;
  }
};

// switch (action.type) {
//   //NOTE ADD //
//   case ADD_FEATURE:
//     let newState = {
//       ...state,
//       car: {
//         ...state.car,
//         features: [...state.car.features, action.payload]
//       }
//     };
//     let newTotal = 0;
//     newState.car.features.forEach(item => {
//       newTotal += item.price;
//     });
//     newState.additionalPrice = newTotal;
//     return newState;
//   //NOTE REMOVE //
//   case REMOVE_FEATURE:
//     const newFeatures = state.car.features.filter(item => {
//       return item !== action.payload;
//     });
//     return {
//       ...state,
//       car: {
//         ...state.car,
//         features: newFeatures
//       }
//     };
//   default:
//     return state;
// }
