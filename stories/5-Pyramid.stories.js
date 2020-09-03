import React from 'react';
import Pyramid from './components/pyramid/pyramid';

export default {
  title: 'Pyramid',
};

export const BaseStory = () => (
  <Pyramid
    exoticsLabel1="Exotique"
    exoticsLabel2="arts, vins, automobile, cryptomonnaies..."
    actionsLabel1="Actions"
    actionsLabel2="(trackers/PEA, gestion pilotée)"
    realEstatesLabel1="Immobilier"
    realEstatesLabel2="(SCPI, SIIC)"
    fundsLabel1="Fonds € en assurance-vie"
    fundsLabel2="(capital garanti)"
    savingsLabel1="Epargne de précaution"
    savingsLabel2="(3 mois de dépenses max. sur le livret A ou LDDS)"
    baseLabel="Résidence principale : achat ou location"
  />
);

BaseStory.story = {
  name: 'Base',
};
