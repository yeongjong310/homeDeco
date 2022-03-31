import requests from './core';
import { Room } from './models/Room.type';

export const get = {
  productList: () => requests.get<Room>('test/image_product_link.json'),
};

export const post = {};
