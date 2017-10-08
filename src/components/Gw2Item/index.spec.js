// import proxyquire from 'proxyquire';

// const sandbox = sinon.sandbox.create();
// const fetchItems = sandbox.stub();
// const fetchSkins = sandbox.stub();
// const fetchCalculatedItemStats = sandbox.stub();

// const Gw2Item = proxyquire.noPreserveCache()('./', {
//   '../../reducers/actions': {
//     fetchItems,
//     fetchSkins,
//     fetchCalculatedItemStats,
//   },
// }).default;

// describe.only('<Gw2Item />', () => {
//   context('when mounted', () => {
//     it('should fetch skin on mount', () => {

//     });

//     it('should fetch item', () => {

//     });

//     context('and item has been fetched', () => {
//       it('should fetch item stats', () => {

//       });
//     });
//   });

//   context('when item stat is yet to be loaded', () => {
//     it('should override name to notify user', () => {

//     });
//   });

//   context('when fetched item stat is invalid', () => {
//     it('should override name to notify user', () => {

//     });
//   });

//   context('when item stat is loaded', () => {
//     it('should prefix name with stat name and set infix upgrade', () => {

//     });
//   });

//   it('should pass all props down to <Item />', () => {

//   });
// });
