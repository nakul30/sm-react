// import React from 'react';
// const PostsList = ({ posts }) => {
//   return (
//     <div className="posts-list">
//       {posts.map((post) => (
//         <div className="post-wrapper" key={post._id}>
//           <div className="post-header">
//             <div className="post-avatar">
//               <img
                
               
//                 alt="user-pic"
//               />
//               <div>
//                 <span className="post-author">{post.user.name}</span>
//                 <span className="post-time">a minute ago</span>
//               </div>
//             </div>
//             <div className="post-content">{post.content}</div>

//             <div className="post-actions">
//               <div className="post-like">
//                 <img
                 
//                   alt="likes-icon"
//                 />
//                 {/* <FontAwesomeIcon icon="fa-regular fa-heart" /> */}
//                 <span>{post.likes.length}</span>
//               </div>

//               <div className="post-comments-icon">
//                 <img
                  
//                   alt="comments-icon"
//                 />
//                 <span>{post.comments.length}</span>
//               </div>
//             </div>
//             <div className="post-comment-box">
//               <input placeholder="Start typing a comment" />
//             </div>

//             <div className="post-comments-list">
//               <div className="post-comments-item">
//                 <div className="post-comment-header">
//                   <span className="post-comment-author">Bill</span>
//                   <span className="post-comment-time">a minute ago</span>
//                   <span className="post-comment-likes">22</span>
//                 </div>

//                 <div className="post-comment-content">Random comment</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PostsList;
import React, { Component } from 'react';
import propTypes from 'prop-types'
class PostsList extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="posts-list">
        {posts.map((post) => (
          <div className="post-wrapper" key={post._id}>
            <div className="post-header">
              <div className="post-avatar">
                <img
                  // src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMEAAACUCAMAAAAd373qAAAAM1BMVEX////a2tqysrLd3d2urq7X19fy8vLg4ODj4+P6+vq+vr7Q0NC1tbXu7u739/fLy8vExMQm3BtTAAAEi0lEQVR4nO2c0ZacIAyGF0EFROX9n7YodaqOkoxjwO3Jd9dzurv5JwmBEObnh2EYhmEYhmEYhmEYhvkFmKbXupUTrdZ9Y0ob9AHGNFrWAbEi/FPqxvwCHeGjb7e2b2TIvhlKm5giaf4ion1wRPUheJLm/xURwqm0qYf0EmH9QtuXNveN5gPzZ0eIZ/lhaDHhs9PQPienTY+K/zcJsn9ISg/6gvkR/Qg3XHPAyw2lzf/5ue6ASGkJRl93wF836KLJcGUNepNQck0avkiBlQRZTMIdHpgllPKCuUnAJKFILphvV6E1RdL561VoTa3zC+jvFBAkZK8Ln+5FYTLvVc0nhwEcMm8q3JoEkbypcH8MTWSMI0MiIGcc3VkJVgJEtjhq0GksI+j/niuOkC4IlnfjRFdjRWRyAi6NZe2tdRFrfY3TkMcJmGosa1ttsRgNeSrzgLJfVXuUh39QiBz7bEQx69y7gCDBdbATcmQC/Dn6A/MjCDfQC2gAF8iEAISEmj6XW8AEOSYEVNUI5XNLrgDKgi4poKqgXKipBfSQAQ5Q4KBfQL2gAkEkD5bRLcoCcUQdRsCfryEBQQJQ2iStgAH46/tKfATgBOL+VzoNZI0QUFWAH2kTIb0tBVbSJYyAFZW2LAMKMEEEhhGpAgMsRdBSGgEWVNIWZDqRJVTNFtJVjTSV0+dLvIL0r6HcGqWPZ7hErsDNEaUCYDEdkXkAKKBcTv97Bcg8cOk8KKkAV5KrCtgZlVNwUz0oqeCemlxUwQhvruF9UdEokigfQEdlSgVQw1Gm+hQLHlJAWpOBP45ajaD2I+muAjiiTU4Az8mgC0h3dtDuGtOrAJuWtBf88NUBUJcRvdOSZ7SJb3t21Aqg5VQA6xFCAPFJH0zl2QuHzXesAOppI8xlkjy9P0D9NK0AsHUdqX2116Aqj5sDoO46IhJh/iDFVkOwXyDvM8mv0rADFVJ21sbi4Kzt0JfK5N13ZBhFDbLuJtDXyRP0NyDQLdRexCfWiyy3UERTIS/IBdw+nrYly20s4kb8C7JMnhLMdy1kmhekGfCKZBrPwTkhLkNyGTJCCcg1IgVPSM2lYPTeRryfZ4xAGdkmpKCbHClG79z2sBb+7UcBaMg37ZiqCVJ0530v2yV3RxknTs+TubMqddZXyp4fM7NO/R4m8/zxg70KdeKIzMPjh1PLCPvjTvvQD5mnlt/jKJwIcJ3rCXdwWsj+ynG3PZIC17d+adhJyD+9v0sFXNd6E0ubU3+JFxTbVyxgs/FAwnpircyjtH8viWpMy/qd19G/0Eui1WsucCzqTMIioNyDtPlFHdyvPpcw5ULBF3XRC18ImFvxhV9ah3TurgsIErpCSbxC4+vYEa7EMrpDnvZ5ES5w1F1SFPpyIij/AA9MDOKSG5SrH/FMf6a/VJOf9Y0VGrWxXtlfPSSAViCHKiL2ERm8x0iPygflxtynGTRG1+lj8nzILPztCBDNLOJYhZrNf1b+HjIM7eiUWulQk/EheNpnf4HUFtPobvTxSZ31o9DP/eIohmEYhmEYhmEYhmEYZsUfNOY+rGQEIMUAAAAASUVORK5CYII="
                  alt="user-pic"
                />
                <div>
                  <span className="post-author">{post.user.name}</span>
                  <span className="post-time">a minute ago</span>
                </div>
              </div>
              <div className="post-content">{post.content}</div>

              <div className="post-actions">
                <div className="post-like">
                  <img
                    // src="https://image.flaticon.com/icons/svg/1077/1077035.svg"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmOo-gIZbXvY3Sv-8xHVKS2FG_yiKCvLTYHQ&usqp=CAU" 
                    alt="likes-icon"
                  />
                  <span>{post.likes.length}</span>
                </div>

                <div className="post-comments-icon">
                  <img
                    // src="https://image.flaticon.com/icons/svg/1380/1380338.svg"
                    src="https://static-00.iconduck.com/assets.00/comment-icon-2048x1928-5rynzu92.png"
                    alt="comments-icon"
                  />
                  <span>{post.comments.length}</span>
                </div>
              </div>
              <div className="post-comment-box">
                <input placeholder="Start typing a comment" />
              </div>

              <div className="post-comments-list">
                <div className="post-comments-item">
                  <div className="post-comment-header">
                    <span className="post-comment-author">Bill</span>
                    <span className="post-comment-time">a minute ago</span>
                    <span className="post-comment-likes">22</span>
                  </div>

                  <div className="post-comment-content">Random comment</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
PostsList.propTypes = {
  posts: propTypes.array.isRequired
}
export default PostsList;
