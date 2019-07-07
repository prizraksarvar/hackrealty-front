import {HttpResult} from './http.result';
import {Review} from './review';

export class ReviewResult extends HttpResult {
  items?: Review[];
}
