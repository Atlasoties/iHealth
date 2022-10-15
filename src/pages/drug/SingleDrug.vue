<template>
    <base-layout page-title="Drugs" page-default-back-link="/categories">
        <ion-card v-for="drug in drugs" :key="drug.id" :router-link='"/single/"+drug.id'>
            <ion-card-header>
                <ion-card-subtitle> {{drug.formOfCompound}}</ion-card-subtitle>
                <ion-card-title>{{drug.drug_name}}</ion-card-title>
            </ion-card-header>

            <ion-card-content>
                <p>{{drug.description}}</p>
                <p>{{drug.price}}</p>
                <p>{{drug.drugMadeIn}}</p>
                <p>{{drug.companyName}}</p>
                <p>{{drug.companyPhone}}</p>
                <p>{{drug.city}}</p>
                <p>{{drug.address1}}</p>
            </ion-card-content>
        </ion-card>
    </base-layout>
</template>

<script>
import axios from 'axios';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue'
const TOKEN = process.env.VUE_APP_TOKEN
const LOCATION = process.env.VUE_APP_LOCATION
export default {
    name: 'DrugCategories',
    components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle },
    data() {
        return {
            drugs: "",
        }
    },
    created() {
        axios
            .get(`https://www.tenawo.com/auth/client/drugs/${this.$route.params.drugID}${LOCATION}`, {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            })
            .then(res => {
                this.drugs = res.data.result
                console.log(this.drugs);
            })
            .catch(err => console.log(err))
    }
}
</script>