import "./Content.scss"

const Content = () => {
  return (
    <div className="content">
      <div className="item">
        <img src="/images/tile1.jpg" alt="" />
        <div className="text">
          <div className="text-inner">
            <h3>décontractée</h3>
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
            <h3>pour le soir</h3>
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
            <h3>de solleil</h3>
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
            <h3>l' été</h3>
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
