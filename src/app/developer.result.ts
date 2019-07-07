import {HttpResult} from './http.result';
import {Developer} from './developer';

export class DeveloperResult extends HttpResult {
  items?: Developer[];
}
