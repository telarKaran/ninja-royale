export const LEFT = "LEFT";
export const RIGHT = "RIGHT";
export const UP = "UP";
export const DOWN = "DOWN";

export const DEFAULT_ANIMATION_FRAME = 0;
export const DEFAULT_ANIMATION_COUNTER = 0;

export const ANIMATION_SPEED = 4;

export const FRAME_SEQUENCES = {
  DOWN: [0, 4, 8, 12, 16, 20, 0],
  UP: [1, 5, 9, 13, 17, 21, 1],
  LEFT: [2, 6, 10, 14, 18, 22, 2],
  RIGHT: [3, 7, 11, 15, 19, 23, 3],
};

export const DEFAULT_DIRECTION = null;

export const MOVE_SPEED = 2;

export const TILE_SIZE = 16;
export const MAP_TILES = 63;
export const MAP_WIDTH = TILE_SIZE * MAP_TILES; // = 16 * 63
export const MAP_HEIGHT = TILE_SIZE * MAP_TILES;