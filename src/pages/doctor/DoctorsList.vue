<template>
    <base-layout page-title="List Doctors" page-default-back-link="categories">
        <ion-card v-for="doctor in doctors" :key="doctor.id">
            <ion-card-header>
                <ion-card-subtitle> {{doctor.availablity}}</ion-card-subtitle>
                <ion-card-title>{{doctor.fullname}}</ion-card-title>
            </ion-card-header>

            <ion-card-content>
                <p>{{doctor.institution}}</p>
                <p>{{doctor.experience}}</p>
                <p>{{doctor.speciality}}</p>

                <p>{{doctor.timeFrom}} - {{doctor.timeTo}}</p>
            </ion-card-content>
        </ion-card>
    </base-layout>
</template>

<script>
import axios from 'axios';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue'
const TOKEN = process.env.VUE_APP_TOKEN
export default {
    name: 'DoctorsList',
    components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle },
    data() {
        return {
            doctors: "",
        }
    },
    created() {
        axios
            .get(`https://www.tenawo.com/auth/client/doctor/list/${this.$route.params.docID}`, {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            })
            .then(res => {
                this.doctors = res.data.result
                console.log(this.doctors);
            })
            .catch(err => console.log(err))
    }
}
</script>