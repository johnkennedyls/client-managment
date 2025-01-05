import { IonButtons, IonCol, IonRow, IonContent, IonGrid, IonHeader, IonPage, IonTitle, IonToolbar, IonMenuButton, IonCard, IonItem, IonButton, IonIcon } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { add } from 'ionicons/icons';

const CustomerList: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Customers</IonTitle>
        </IonToolbar>
      </IonHeader>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Customers</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
           <IonCard>
            <IonTitle>Customers management</IonTitle>

            <IonItem>
              <IonButton color="primary" fill="solid" slot="end"
              size="default">
                <IonIcon icon={add}></IonIcon>
                Add Customer</IonButton>
            </IonItem>


           <IonGrid className="table">
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
        </IonRow>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
        </IonRow>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
        </IonRow>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
        </IonRow>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
        </IonRow>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
        </IonRow>
      </IonGrid>
           </IonCard>

      

      
      </IonContent>
    </IonPage>
  );
};

export default CustomerList;
