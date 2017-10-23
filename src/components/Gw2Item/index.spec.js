import React from 'react';
import proxyquire from 'proxyquire';
import * as enzyme from 'enzyme';

const sandbox = sinon.sandbox.create();
const fetchItems = sandbox.stub().resolves();
const fetchSkins = sandbox.stub().resolves();
const fetchCalculatedItemStats = sandbox.stub().resolves();

const Gw2Item = proxyquire.noPreserveCache()('./', {
  '../../actions/gw2': {
    fetchItems,
    fetchSkins,
    fetchCalculatedItemStats,
  },
  'react-redux': { connect: () => (Component) => Component },
}).default;


const shallow = (jsx) => enzyme.shallow(jsx, {
  lifecycleExperimental: true,
});

describe('<Gw2Item />', () => {
  const props = {
    id: 10,
    statsId: 20,
    skinId: 30,
    other: true,
    fetch: fetchItems,
    fetchSkins,
    fetchCalculatedItemStats,
  };

  context('when mounted', () => {
    it('should fetch skin on mount', () => {
      shallow(<Gw2Item {...props} />);

      expect(fetchSkins).to.have.been.calledWith([props.skinId]);
    });

    it('should fetch item', () => {
      shallow(<Gw2Item {...props} />);

      expect(fetchItems).to.have.been.calledWith([props.id]);
    });

    context('and item has been fetched', () => {
      it('should fetch item stats', (done) => {
        const item = {
          rarity: 'Ascended',
          level: 80,
          type: 'armor',
          details: {
            type: 'Back',
          },
        };
        shallow(<Gw2Item {...props} item={item} />);

        setTimeout(() => {
          expect(fetchCalculatedItemStats).to.have.been.calledWith([{
            calculatedId: '1020',
            id: 20,
            itemId: 10,
            level: item.level,
            rarity: item.rarity,
            type: item.details.type,
          }]);
          done();
        }, 0);
      });
    });
  });

  describe('selector', () => {
    const selector = proxyquire.noPreserveCache()('./', {
      'react-redux': { connect: (mapStateToProps) => () => mapStateToProps },
    }).default;

    const state = {
      items: {
        20: {
          name: 'Cool Item',
          details: {
            type: 'Back',
          },
        },
      },
      skins: {
        10: {
          cool: true,
        },
      },
      calculatedItemStats: {},
    };

    context('when item stat is yet to be loaded', () => {
      it('should override name to notify user', () => {
        const selectorProps = {
          id: 20,
          statsId: 30,
        };

        const mappedState = selector(state, selectorProps);

        expect(mappedState.item).to.eql({
          ...state.items[20],
          name: '... Cool Item',
        });
      });
    });

    context('when fetched item stat is invalid', () => {
      it('should override name to notify user', () => {
        const selectorProps = {
          id: 20,
          statsId: 30,
        };

        const mappedState = selector({
          ...state,
          calculatedItemStats: {
            2030: {
              error: true,
            },
          },
        }, selectorProps);

        expect(mappedState.item).to.eql({
          ...state.items[20],
          name: '[404] Cool Item',
        });
      });
    });

    context('when item stat is loaded', () => {
      it('should prefix name with stat name and set infix upgrade', () => {
        const selectorProps = {
          id: 20,
          statsId: 30,
        };
        const itemStats = {
          name: 'SWEET!',
          attributes: [{}],
        };

        const mappedState = selector({
          ...state,
          calculatedItemStats: {
            2030: itemStats,
          },
        }, selectorProps);

        expect(mappedState.item).to.eql({
          ...state.items[20],
          name: 'SWEET! Cool Item',
          details: {
            ...state.items[20].details,
            infix_upgrade: {
              name: itemStats.name,
              attributes: itemStats.attributes,
            },
          },
        });
      });
    });

    it('should select item', () => {
      const selectorProps = {
        id: 20,
      };

      const mappedState = selector(state, selectorProps);

      expect(mappedState.item).to.equal(state.items[selectorProps.id]);
    });

    it('should select skin', () => {
      const selectorProps = {
        skinId: 10,
      };

      const mappedState = selector(state, selectorProps);

      expect(mappedState.skin).to.equal(state.skins[selectorProps.skinId]);
    });
  });

  it('should pass most props down to <Item />', () => {
    const moreProps = {
      item: {},
      skin: {},
      tooltipType: 'items',
      yolo: false,
    };

    const wrapper = shallow(<Gw2Item {...props} {...moreProps} />);

    expect(wrapper.find('Item').props()).to.eql({ other: true, ...moreProps });
  });
});
