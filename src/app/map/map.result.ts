import {HttpResult} from '../http.result';
import {Building} from './building';

export class MapResult extends HttpResult {
  items?: Building[];
}
