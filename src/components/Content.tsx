import "./Content.scss"

const Content = () => {
  return (
    <div className="content">
      <div className="item">
        <img src="/images/tile1.jpg" alt="" />
        <div className="text">
          <div className="text-inner">
            <h3>fashionable item 1</h3>
            <a href="#">
              explore <span>+</span>
            </a>
          </div>
        </div>
      </div>
      <div className="item">
        <img src="/images/tile2.jpg" alt="" />
        <div className="text">
          <div className="text-inner">
            <h3>fashionable item 2</h3>
            <a href="#">
              explore <span>+</span>
            </a>
          </div>
        </div>
      </div>
      <div className="item">
        <img src="/images/tile3.jpg" alt="" />
        <div className="text">
          <div className="text-inner">
            <h3>fashionable item 3</h3>
            <a href="#">
              explore <span>+</span>
            </a>
          </div>
        </div>
      </div>
      <div className="item">
        <img src="/images/tile4.jpg" alt="" />
        <div className="text">
          <div className="text-inner">
            <h3>fashionable item 4</h3>
            <a href="#">
              explore <span>+</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
