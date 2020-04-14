import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonToggle,
  IonButton,
  IonSlides,
} from '@ionic/react';
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hello SEMjs</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1>Hello World</h1>
        <IonToggle></IonToggle>
        <IonButton color="primary">I am a button</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
