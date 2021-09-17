// import React from 'react';
// import { configure, mount } from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// import configureStore from "redux-mock-store";
// import CreationRecipe from './RecipeCreated.js';
// import thunk from 'redux-thunk';

// const middlewares = [thunk];


// configure({adapter: new Adapter()});

// describe('Creation Recipe', () => {

//     describe('<CreationRecipe />', () => {
//         let wrapper;
//         let store;
//         const testStore = {
//             recipecreated: {},
//             types: ['vegetarian', 'vegan', 'gluten free'],
//             loading: false,
//             error: false
//         };
//         beforeEach(() => {
//             const mockStore = configureStore(middlewares);
//             store = mockStore(testStore);
//             wrapper =  mount(<CreationRecipe store={store}/>);
//             store.clearActions();
//         })
        
//         it('Should contain all elements', () => {
//             expect(wrapper.find('.creation-name')).toHaveLength(1);
//             expect(wrapper.find('.creation-summary')).toHaveLength(1);
//             expect(wrapper.find('.creation-score')).toHaveLength(2);
//             //expect(wrapper.find('.creation-img')).toHaveLength(1);
//             //expect(wrapper.find('.creation-types')).toHaveLength(1);
//             expect(wrapper.find('.creation-TypeDiets')).toHaveLength(1);
//             expect(wrapper.find('.creation-stepsBySteps')).toHaveLength(1);
//             expect(wrapper.find('#submit')).toHaveLength(1);
//         })
//     });
// })