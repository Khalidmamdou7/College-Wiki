import './admin.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import AddList from './List/AddList';
import Course from './Course/Course';
import ViewList from './List/ViewList';
import ViewLists from './List/ViewLists';
import { useState } from 'react';

function AdminRoute() {
    const history = useHistory();
    const isAuthenticated = localStorage.getItem("isAdmin");
    const [option, setOption] = useState("")
    
    if (!isAuthenticated) {
        history.push('/login');
    }
    return (
        <Router>
            <div className="outerWrap">
                <div className="NavBar">
                    <ul>
                        <Link to="/admin/list/add">
                            <li className={option === "addList" ? "active" : ""} onClick={() => setOption("addList")}>
                                <span className="icon">
                                    <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z" fill="currentColor"></path>
                                    </svg>
                                </span>
                                <span className="title">
                                    Add List
                                </span>
                            </li>
                        </Link>
                        <Link to="/admin/course">
                            <li className={option === "addCourse" ? "active" : ""} onClick={() => setOption("addCourse")}>
                                <span className="icon">
                                <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z" fill="currentColor" fill-rule="evenodd"></path></svg>
                                </span>
                                <span className="title">
                                    Add Course
                                </span>
                            </li>
                        </Link>
                        <Link to="/admin/list/hem">
                            <li className={option === "viewHEM" ? "active" : ""} onClick={() => setOption("viewHEM")}>
                                <span className="icon">
                                <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z" fill="currentColor" fill-rule="evenodd"></path></svg>
                                </span>
                                <span className="title">
                                    View HEM lists
                                </span>
                            </li>
                        </Link>
                    </ul>
                </div>
                <Switch>
                    <Route path="/admin/list/add">
                        <AddList/>
                    </Route>
                    <Route path="/admin/list/:id/view">
                        <ViewList />
                    </Route>
                    <Route path="/admin/list/:id/">
                        <ViewLists />
                    </Route>
                    <Route path="/admin/list">

                    </Route>
                    <Route path="/admin/course">
                        <Course/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default AdminRoute
