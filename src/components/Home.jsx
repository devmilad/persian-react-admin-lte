import React from 'react'

const Home = () => {
    return (
        <div>
            <div class="content-wrapper">
                <div class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1 class="m-0">صفحه استارتر</h1>
                            </div>
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right">
                                    <li class="breadcrumb-item"><a href="#">صفحه نخست</a></li>
                                    <li class="breadcrumb-item active">صفحه استارتر</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">عنوان کارت</h5>

                                        <p class="card-text">
                                            متن کارت
                                        </p>

                                        <a href="#" class="card-link">لینک کارت</a>
                                        <a href="#" class="card-link">لینک دیگر</a>
                                    </div>
                                </div>

                                <div class="card card-primary card-outline">
                                    <div class="card-body">
                                        <h5 class="card-title">عنوان کارت</h5>

                                        <p class="card-text">
                                            متن کارت
                                        </p>
                                        <a href="#" class="card-link">لینک کارت</a>
                                        <a href="#" class="card-link">لینک دیگر</a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 class="m-0">ویژه</h5>
                                    </div>
                                    <div class="card-body">
                                        <h6 class="card-title">عنوان ویژه</h6>

                                        <p class="card-text">با متن</p>
                                        <a href="#" class="btn btn-primary">لینک مقصد</a>
                                    </div>
                                </div>

                                <div class="card card-primary card-outline">
                                    <div class="card-header">
                                        <h5 class="m-0">ویژه</h5>
                                    </div>
                                    <div class="card-body">
                                        <h6 class="card-title">عنوان ویژه</h6>

                                        <p class="card-text">با متن.</p>
                                        <a href="#" class="btn btn-primary">لینک مقصد</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home