import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsChat, BsEmojiSmile, BsBookmark } from 'react-icons/bs'
import './style.css'
import { IconContext } from 'react-icons/lib'
export function Post() {
  return (
    <>
      <header className="header-post">
        <div className="infos-post">
          <img
            className="img-header-post"
            src="https://github.com/wilkgillian.png"
            alt="img not found"
          />

          <p>Wilk Gillian</p>
        </div>
        <FiMoreHorizontal />
      </header>
      <div className="img-post">
        <img src="https://github.com/wilkgillian.png" alt="img not found" />
      </div>
      <div className="footer-post">
        <IconContext.Provider value={{ size: '30px' }}>
          <section className="engagements-post">
            <div className="icons-1">
              <div className="icon">
                <IoMdHeartEmpty />
              </div>
              <div className="icon">
                <BsChat />
              </div>
              <div className="icon">
                <FiSend />
              </div>
            </div>
            <div className="icon">
              <BsBookmark />
            </div>
          </section>
        </IconContext.Provider>
        <section className="like">
          <span>61 likes</span>
        </section>
        <div className="legend">
          <p>
            <strong>maykbrito</strong>
            Senta o dedo no like garay
          </p>
        </div>
        <div className="time-post">
          <time>Há 15 minutes</time>
        </div>
        <div className="comment">
          <div className="fake-comment">
            <IconContext.Provider value={{ size: '25px' }}>
              <div className="icon">
                <BsEmojiSmile />
              </div>
            </IconContext.Provider>
            <input placeholder="Insert your comment..." />
          </div>
          <button>Public</button>
        </div>
      </div>
    </>
  )
}
