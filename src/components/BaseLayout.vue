<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>{{ pageTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot />
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonContent,
} from "@ionic/vue";

import axios from 'axios';

const headers = {
    "Content-Type":'application/json',
    Authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMWMwYTQwYjM0NmUwOWZkNDk0NmVjYWEwMDBlOGY4ZmNjZDZjYWU5MmZjZjY1YjE5M2YzZTA5NzdmYjY0NWE4M2I5ZjBiY2EzMjUzMzNjNDMiLCJpYXQiOjE2NjU0NDE0OTQuOTA5NzA4MDIzMDcxMjg5MDYyNSwibmJmIjoxNjY1NDQxNDk0LjkwOTcxMjA3NjE4NzEzMzc4OTA2MjUsImV4cCI6MTY5Njk3NzQ5NC45MDU3NjI5MTA4NDI4OTU1MDc4MTI1LCJzdWIiOiIyMTAxIiwic2NvcGVzIjpbXX0.UoXeBl1i7xNtyLTIY8GAuQalBR2q6Mlr1U0UVu447nlUMPHt81ZTmkTu9SAEfeuWOiX1y_MgqCYnjpsWqM3cIX1VqEPKgZFVDFvKY4g_cLamIIv9Gl0KW84MKPcHCGbTnCK7tz1OSxYNaaBDG5ux-Flgfi_z_02zoUc9Yi0FlWcPGSVUUBupuEKA6SRkJR1UR6DITBISZofOYfuc_7S624aTz1j6nfjcMJU58yocTgGJ1Kj9mykcqjjfN3wHRUoCCh2eAUqzFc8U3uyDnLehKp9vmJgWCCRkHO6FOnUTEO2kpK2i1JVmcTdilRLYMuLVWlSPJGVpllmwCACxKHbH7hgIWZYwk4gsW4u_Qxb7CtXroR0ot6LAKeLx-4BY-nwmuNuyLQpACVoDMjY4W4qplF0_SS1DYstEg_cbfiWze4KDrTVWiBwqc5AsFkhgJ81Rnz-aqCWDM3LMRa5-6zG9QtPXpyHLmom-UcwAzs7IRvWlKE-MB62gI2cw3ULAEeO_NH5vI7VnWvkX-0yIB0JcJEe8DJgR0cG_aZDiQac-0pvukLBiWKvdqMC_mpsXXT0xs-HRaYMX9z_2mex0Wt3lQGwZfeZ5jRd34vR80hikvgr_uXYZhtz3Nj9LjDh2SafRnSUJUcYxbSuCPMvxBXvACyQL0kgzSNAYLJ6iBxYd3zo"
}
export default {
  props: ["pageTitle"],
  components: { IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonButtons, IonBackButton },
  data() {

  },
  mounted(){
    axios.
      get('https://www.tenawo.com/auth/doctor/categories/',{headers}).
      then(response => console.log(response)).
      catch(err => console.log(err));
  }
};
</script>
