import requests from './core';
import { Room } from './models/Room.type';

export const get = {
  productList: (): Promise<Room> => requests.get('test/image_product_link.json'),
};

export const post = {};
