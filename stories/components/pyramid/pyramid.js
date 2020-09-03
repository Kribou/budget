import React from 'react';
import './pyramid.scss';

const Base = ({ children }) => <div className="base">{children}</div>;

const Brick = ({ children }) => <div className="brick">{children}</div>;

const Row = ({ children }) => (
  <div className="pyramid-row">
    {children.map((child, index) => {
      const rowClassName = index === 0 ? 'left-row-cell' : 'right-row-cell';
      return <div className={rowClassName}>{child}</div>;
    })}
  </div>
);

const Exotics = () => (
  <Brick>
    <p>Exotique</p>
    <p>arts, vins, automobile, cryptomonnaies...</p>
  </Brick>
);
const Actions = () => (
  <Brick>
    <p>Actions</p>
    <p>(trackers/PEA, gestion pilotée)</p>
  </Brick>
);
const RealEstates = () => (
  <Brick>
    <p>Immobilier</p>
    <p>(SCPI, SIIC)</p>
  </Brick>
);

const Funds = () => (
  <Brick>
    <p>Fonds € en assurance-vie</p>
    <p>(capital garanti)</p>
  </Brick>
);

const Savings = () => (
  <Brick>
    <p>Epargne de précaution</p>
    <p>(3 mois de dépenses max. sur le livret A ou LDDS)</p>
  </Brick>
);

const Pyramid = props => <div className="pyramid">{props.children}</div>;

const InvestmentsPyramid = props => (
  <Pyramid>
    <Exotics />
    <Row>
      <Actions />
      <RealEstates />
    </Row>
    <Funds />
    <Savings />
    <Base>Résidence principale : achat ou location</Base>
  </Pyramid>
);

export default InvestmentsPyramid;
