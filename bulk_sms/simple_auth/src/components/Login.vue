
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

                  
                  <p class="text-center h3 fw-bold mb-3 mx-1 mx-md-4 mt-4">Log in</p>
                  
                  <form class="mx-1 mx-md-4">
                    <p class="small  mt-2 pt-1 mb-3 " style="margin-left: 17px">Welcome back! Please enter your details.</p>
  

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example3c">Email</label>
                      
                        <input type="email" id="form3Example3c" class="form-control" placeholder="Enter your email or username"/>
                        </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-2">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example4cd">Password</label>
                          <input type="password" id="form3Example4cd" class="form-control" placeholder="Enter your password"/>
                        </div>
                    </div>
                    
                    <div class="row justify-content-between" style="margin-left: 15px">
                      <div class="form-check d-flex  col-4 mb-4" style="margin-top:30px">
                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                        <label class="form-check-label" for="form2Example3">
                          Remember Password</label>
                      </div>
                      <div class=" col-4" style="margin-top:30px;">
                        <router-link to="/forgot-password" style="color:#0B970B;">Forgot Password</router-link>
                      </div>
                    </div>
                    
  
                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="button" class="btn btn-primary btn-lg" style="background: black; border: 1px solid #B9FF98; width: 300px;">Sign in</button>
                    </div>

                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account?
                        <router-link to="/signup" style="color:#0B970B;">Sign up</router-link>
                      </p>
                    </div>
                  </form>
  
                </div>
                <div class="col-md-10 col-lg-6 col-xl-5 d-flex align-items-center order-2 order-lg-2" id="app">
  
                  <img :src="login_img" class="img-fluid" alt="Sample image">
  
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
import login_img from '../assets/img/login_page_img.png';
import logo_img from '../assets/img/logo.png';
export default {
  data(){
    return{
      logo_img:logo_img,
      login_img:login_img,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  font-family: 'Inter';
  
}
.form-control {
  border: 1px solid #B9FF98;
}
.divider:after,
.divider:before {
content: "";
flex: 1;
height: 1px;
background: #eee;
}
.h-custom {
height: calc(100% - 73px);
}
@media (max-width: 450px) {
.h-custom {
height: 100%;
}
}
</style>
