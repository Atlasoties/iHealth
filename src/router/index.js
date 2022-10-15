import { createRouter, createWebHistory } from "@ionic/vue-router";
import CategoriesPage from "../pages/CategoriesPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/categories",
  },
  {
    path: "/categories",
    name: "categories",
    component: CategoriesPage,
  },
  {
    path: "/categories/doctor",
    name: "doctors",
    component: () => import('../pages/doctor/DiseaseCategories.vue'),
  },
  {
    path: "/singledoc/:id",
    name: "singledoc",
    component: () => import('../pages/doctor/SingleDisease.vue'),
  },
  {
    path: "/list/:docID",
    name: "list",
    component: () => import('../pages/doctor/DoctorsList.vue'),
  },
  {
    path: "/all/doctors",
    name: "all",
    component: () => import('../pages/doctor/AllDoctors.vue'),
  },

  {
    path: "/categories/drug",
    name: "drug",
    component: () => import('../pages/drug/DrugCategories.vue'),
  },
  {
    path: "/single/:drugID",
    name: "single",
    component: () => import('../pages/drug/SingleDrug.vue'),
  },
  {
    path: "/hospitals",
    name: "hospitals",
    component: () => import('../pages/hospital/AllHospitals.vue'),
  },
  {
    path: "/clinics",
    name: "clinics",
    component: () => import('../pages/clinic/AllClinics.vue'),
  },
  {
    path: "/laboratories",
    name: "laboratory",
    component: () => import('../pages/laboratory/AllLaboratory.vue'),
  },
  {
    path: "/diagnostics",
    name: "diagnostics",
    component: () => import('../pages/laboratory/DiagnosticImages.vue'),
  },
  {
    path: "/wholesale",
    name: "wholesale",
    component: () => import('../pages/pharmacy/WholeSalers.vue'),
  },
  {
    path: "/medical/wholesale",
    name: "medical",
    component: () => import('../pages/pharmacy/MedicalWholeSalers.vue'),
  },

  {
    path: "/homecare",
    name: "homecare",
    component: () => import('../pages/homecare/HomeCare.vue'),
  },
  {
    path: "/ambulance",
    name: "ambulance",
    component: () => import('../pages/ambulance/AmbulanceService.vue'),
  }, {
    path: "/tourism",
    name: "tourism",
    component: () => import('../pages/tourism/MedicalTourism.vue'),
  }, {
    path: "/agency",
    name: "agency",
    component: () => import('../pages/agency/AgencyInsurance.vue'),
  }, {
    path: "/oxygen",
    name: "oxygen",
    component: () => import('../pages/oxygen/OxygenImplant.vue'),
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
