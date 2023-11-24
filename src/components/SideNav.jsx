import React from 'react'

const SideNav = () => {
    return (
            <aside className="main-sidebar sidebar-dark-primary elevation-4">




                <div className="sidebar">

                    <div className="user-panell  mt-3 pb-3 mb-3 d-flex flex-column justify-content-center align-items-center">
                        <div className="image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" width="100"/>
                        </div>
                        <div className="info mt-3">
                            <a href="#" className="d-block">میلاد فاضلیان </a>
                        </div>
                    </div>




                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                            <li className="nav-item ">
                                <a href="#" className="nav-link d-flex align-items-center active">
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p >
                                        داشبورد
                                        <i className="right fas fa-angle-left"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="./index.html" className="nav-link active">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>داشبورد 1</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./index2.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>داشبورد 2</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./index3.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>داشبورد 3</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item ">
                                <a href="pages/widgets.html" className="nav-link d-flex align-items-center">
                                    <i className="nav-icon fas fa-th"></i>
                                    <p>
                                        ابزارک ها
                                        <span className="right badge badge-danger">جدید</span>
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </nav>

                </div>

            </aside>
 
    )
}

export default SideNav