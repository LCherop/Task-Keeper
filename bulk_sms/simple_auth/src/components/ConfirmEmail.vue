<template>
    <section class="vh-100" style="background-color: #fff;">
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-12 col-xl-11">
                    <div class="card text-black" style="border-radius: 25px;border-color:white;">
                        <div class="card-body p-md-5">
                            <div class="row">
                                <div >
                                    <img :src="logo_img"/>
                                    <h2 class="offset-xl-1">
                                        <span style="font-weight:bold">SMS</span>Portal
                                    </h2>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-md-10 col-lg-6 col-xl-7 order-1 order-lg-1">
                                    <p class="text-center h3 fw-bold mb-3 mx-1 mx-md-4 mt-4">Check your email.</p>
                                    <p class="card-text">We've sent a passowrd reset link to</p>
                                    <forgot-password the_email = {{the_email}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ForgotPassword from './ForgotPassword.vue';
export default {
    components:{
        ForgotPassword
    },
    data(){
        return{

        }
    }
    
}
</script>

<style>
*{
    font-family: 'Inter';
   
}
</style>