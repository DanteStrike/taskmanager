import AbstractComponent from './abstract.js';


class BoardFilter extends AbstractComponent {
  constructor() {
    super();
  }

  _getTemplate() {
    return `<div class="board__filter-list">
              <a href="#" class="board__filter" data-sort-type="default">SORT BY DEFAULT</a>
              <a href="#" class="board__filter" data-sort-type="date-up">SORT BY DATE up</a>
              <a href="#" class="board__filter" data-sort-type="date-down">SORT BY DATE down</a>
            </div>`;
  }
}


export default BoardFilter;
