// @flow

import type { Component } from 'react';

declare var __DEVELOPMENT__: boolean;
declare var __webpack_public_path__: string;
declare function storiesOf (string, any): any;
declare var App: Component<*, *>;

import type { Paginated, PvpStanding, User } from 'flowTypes';

type Leaderboard = Paginated<PvpStanding>;
type Members = Paginated<User>;

declare type ReduxState = {
  guilds: {
    [name: string]: {
      members: Members,
    },
  },

  leaderboards: {
    pvp: {
      na: Leaderboard,
      eu: Leaderboard,
      gw2a: Leaderboard,
    },
  },
};

declare type GetState = () => ReduxState;
