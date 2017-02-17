import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import { Link, IndexLink } from 'react-router';
import {Base} from './Base.jsx';

const HomePage = () => (
  <div>
    <Base/>
    <Card className="container">
        <CardTitle title="Stay With You" />
    </Card>
  </div>
);

export default HomePage;
