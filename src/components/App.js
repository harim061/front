import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../routes/Main';
import Plays from '../routes/Plays';
import PlaysDetail from '../components/PostView/PlaysDetail';
import Studys from '../routes/Studys';
import StudysDetail from '../components/PostView/StudysDetail';
import Minds from '../routes/Minds';
import MindsDetail from '../components/PostView/MindsDetail';
import Login from '../routes/Login';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path={`${process.env.PUBLIC_URL}/`} element={<Main />} />
                <Route
                    path={`${process.env.PUBLIC_URL}/plays`}
                    element={<Plays />}
                />
                <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/plays/:id`}
                    element={<PlaysDetail />}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/studys`}
                    element={<Studys />}
                />
                <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/studys/:id`}
                    element={<StudysDetail />}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/minds`}
                    element={<Minds />}
                />
                <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/minds/$id`}
                    element={<MindsDetail />}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/login`}
                    element={<Login />}
                />
            </Routes>
        </Router>
    );
};

export default App;
