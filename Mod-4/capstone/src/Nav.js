import React from 'react'


function Nav() {
    return (



        <nav class="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
                    <a
                        href="#"
                        class="navbar-brand mb-0 h1">
                            Crypto Tracker
                    </a>
                    <button
                        type='button'
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        class="navbar-toggler"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle Navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a href="#" class="nav-link">
                                        Home
                                    </a>
                                </li>
                                <li class="nav-item active">
                                    <a href="#" class="nav-link">
                                        Learn
                                    </a>
                                </li>
                                <form class="d-flex">
                                <input
                                        class="form-control me-2"
                                        type="search"
                                        placeholder='Search Crypto'
                                    />
                                    <button
                                        type='submit'
                                        class="btn btn-outline-success"
                                    >
                                        Search
                                    </button>
                                </form>

                            </ul>
                        </div>
                </div>
        </nav>
    )
}

export default Nav
