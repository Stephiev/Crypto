import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CryptoCard = () => (
  <Card>
    <CardHeader
      title="ETH"
      subtitle="Curent Info On ETH"
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
    <CardText expandable={true}>
      The current value for ETH is 800USD
    </CardText>
  </Card>
);

export default CryptoCard;