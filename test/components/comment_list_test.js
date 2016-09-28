import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('Comment List', () => {

  let component;
  const props = { comments: ['New Comment', 'Another Comment'] };

  beforeEach( () => {
    component = renderComponent(CommentList, null, props);
  });
  
  it('shows an li for each comment', () => {  
    expect(component.find('li').length)
      .to.equal(props.comments.length);
  });

  it('shows each comment that is provided', () => {  
    expect(component).to.contain('New Comment');
    expect(component).to.contain('Another Comment');
  });
  
});

