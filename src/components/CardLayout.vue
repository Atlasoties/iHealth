<template>
    <ion-card>
        <ion-card-header>
            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            <ion-card-title>Card Title</ion-card-title>
        </ion-card-header>

        <ion-card-content>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
        </ion-card-content>
    </ion-card>
</template>

<script>
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue'

export default {
    name: 'CardLayout',
    components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle }
}
</script>