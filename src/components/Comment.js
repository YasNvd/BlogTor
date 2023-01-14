import React from 'react'

function COmment() {
  return (
    <div className=' m-10'>
    <div class="ui comments">
  <h3 class="ui dividing header">Comments</h3>
  <div class="comment">
    <div class="avatar">
      <img src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
    </div>
    <div class="content">
      <a class="author">Matt</a>
      <div class="metadata">
        <div>Today at 5:42PM</div>
      </div>
      <div class="text">How artistic!</div>
      <div class="actions">
        <a class="">Reply</a>
      </div>
    </div>
  </div>
  <div class="comment">
    <div class="avatar">
      <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
    </div>
    <div class="content">
      <a class="author">Elliot Fu</a>
      <div class="metadata">
        <div>Yesterday at 12:30AM</div>
      </div>
      <div class="text">
        <p>This has been very useful for my research. Thanks as well!</p>
      </div>
      <div class="actions">
        <a class="">Reply</a>
      </div>
    </div>
    <div class="ui comments">
      <div class="comment">
        <div class="avatar">
          <img src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
        </div>
        <div class="content">
          <a class="author">Jenny Hess</a>
          <div class="metadata">
            <div>Just now</div>
          </div>
          <div class="text">Elliot you are always so right :)</div>
          <div class="actions">
            <a class="">Reply</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <form class="ui reply form">
    <div class="field">
      <textarea rows="3"></textarea>
    </div>
    <button class="ui icon primary left labeled button">
      <i aria-hidden="true" class="edit icon"></i>Add Reply
    </button>
  </form>
</div>
</div>

  )
}

export default COmment
