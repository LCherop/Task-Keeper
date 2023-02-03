<template>
    <section class="vh-100" style="background-color: #fff;">
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                
                <div class="card text-center" style="width: 500px;border-color: white;">
                    <div class="card-header h2 " style="background:#fff">Forgot Password?</div>
                    <div class="card-body px-5">
                        <p class="card-text py-3">
                            No worries, we'll send you reset instructions.
                        </p>
                        <form>
                            <div class="form-group" style="text-align:left;" >
                                <label for="typeEmail" >Email</label>
                                <input v-model="the_email" type="email" id="typeEmail" class="form-control my-3" placeholder="Enter your email address" />
                            </div>
                            <button @click="sendEmail" class="btn btn-primary w-100" type="submit" style="background:black;  border: 1px solid #B9FF98; border-radius: 8px; ">
                                Reset Password
                            </button>
                            
                        </form>
                        <div class="d-flex justify-content-between mt-4">
                            <router-link to="/" style="color:black;">Login</router-link>
                            <router-link to="/signup" style="color:black;">Register</router-link>
                        </div>
                    </div>
                </div>
            </div>
          </div>
    </section>
    
</template>

<script>

export default {
    data(){
        return{
            the_email:""
        }
    },
    methods: {
        sendEmail(){
            this.the_email = this.the_email;
            return this.the_email;
        }
    },
    props: {
        
    }
}
</script>

<style>

*{
    font-family: 'Inter';
   
}
.form-control {
    border: 1px solid #B9FF98;
  }

</style>