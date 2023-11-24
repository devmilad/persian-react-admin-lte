import React from 'react'

const Header = () => {
  return (

    <nav className="main-header navbar navbar-expand navbar-white navbar-light">

      <ul className="navbar-nav d-lg-none">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
        </li>
      </ul>


      <ul className="navbar-nav ml-auto">
      
        <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" href="#">
            <i className="far fa-comments fa-lg"></i>
            <span className="badge badge-danger navbar-badge">3</span>
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-left">
            <a href="#" className="dropdown-item">

              <div className="media">
                <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                <div className="media-body">
                  <h3 className="dropdown-item-title">
                    احمد محبی
                    <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
                  </h3>
                  <p className="text-sm">هر وقت تونستی با من تماس بگیر ...</p>
                  <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 ساعت پیش</p>
                </div>
              </div>

            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">

              <div className="media">
                <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                <div className="media-body">
                  <h3 className="dropdown-item-title">
                    علی ایرانی
                    <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
                  </h3>
                  <p className="text-sm">پیامتو گرفتم ...</p>
                  <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 ساعت پیش</p>
                </div>
              </div>

            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">

              <div className="media">
                <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                <div className="media-body">
                  <h3 className="dropdown-item-title">
                    نورا حسینی
                    <span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
                  </h3>
                  <p className="text-sm">این عنوان مطلب هستش</p>
                  <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 ساعت پیش</p>
                </div>
              </div>

            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item dropdown-footer">مشاهده تمام پیام ها</a>
          </div>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" href="#">
            <i className="far fa-bell fa-lg"></i>
            <span className="badge badge-warning navbar-badge">15</span>
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-left">
            <span className="dropdown-item dropdown-header">15 پیام</span>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">
              <i className="fas fa-envelope mr-2"></i> 4 پیام جدید
              <span className="float-right text-muted text-sm">3 دقیقه</span>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">
              <i className="fas fa-users mr-2"></i> 8 درخواست جدید
              <span className="float-right text-muted text-sm">12 ساعت</span>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">
              <i className="fas fa-file mr-2"></i> 3 گزارش جدید
              <span className="float-right text-muted text-sm">2 روز</span>
            </a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item dropdown-footer">مشاهده تمام اطلاعیه ها</a>
          </div>
        </li>

        <li className="nav-item">
          <a className="nav-link"  href="#" role="button">
          <i class="fas fa-sign-out-alt text-muted fa-lg"></i>
          </a>
        </li>

      </ul>
    </nav>

  )
}

export default Header