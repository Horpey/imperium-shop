<template>
  <div>
    <div class="section section-pd bg-pr-trans">
      <div class="page-header">
        <div class="container shape-container d-flex align-items-center">
          <div class="col px-0">
            <div class="row justify-content-center mt-5">
              <div class="col-lg-5">
                <h2 class="text-primary mt-4 display-1 f-bold text-head mb-3">
                  Power as a service
                </h2>
                <p class="f-16 text-dark mb-0">
                  At Imperium, we take care of all your power and energy
                  concerns by empowering your homes, stores and businesses with
                  our clean energy solutions. By selecting our “Power as a
                  Service” option, you are guaranteed clean and reliable power
                  without the burden and hassle of installing, maintaining or
                  even owning a solar/power solution. Begin to enjoy power today
                  at zero upfront cost. You only pay an agreed tariff based on
                  the solution deployed.
                </p>
              </div>
              <div class="col-md-1"></div>
              <div class="col-md-6">
                <form class="my-5">
                  <div class="row">
                    <div class="form-group contactForm col-md-6">
                      <label>First name</label>
                      <input class="form-control" type="text" />
                    </div>
                    <div class="form-group contactForm col-md-6">
                      <label>Last name</label>
                      <input class="form-control" type="text" />
                    </div>
                    <div class="form-group contactForm col-md-6">
                      <label>Email address</label>
                      <input class="form-control" type="email" />
                    </div>
                    <div class="form-group contactForm col-md-6">
                      <label>Phone number</label>
                      <input class="form-control" type="text" />
                    </div>
                    <div class="form-group contactForm col-md-6">
                      <label>Contact preference</label>
                      <input class="form-control" type="text" />
                    </div>
                    <div class="form-group contactForm col-md-6">
                      <label>Contact Date</label>
                      <input class="form-control" type="text" />
                    </div>
                    <div class="form-group contactForm col-md-6">
                      <label>House Number</label>
                      <input class="form-control" type="text" />
                    </div>
                    <div class="form-group contactForm col-md-6">
                      <label>Street Number</label>
                      <input class="form-control" type="text" />
                    </div>
                    <div class="form-group contactForm col-md-6">
                      <label>LGA</label>
                      <input class="form-control" type="text" />
                    </div>
                    <div class="form-group contactForm col-md-6">
                      <label>State</label>
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                  <div class="form-group">
                    <button
                      class="
                        btn-block btn btn-imp-secondary
                        bg-dark
                        text-white
                        mt-5
                        py-3
                        px-5
                      "
                    >
                      <span class="nav-link-inner--text">Submit</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
#terms-and-conditions {
  color: black;
  h3 {
    color: #219653;
    opacity: 0.8;
    font-weight: bold;
  }
  h4 {
    color: black;
    font-size: 18px;
    font-weight: bold;
  }
}
#terms-and-conditions .details table {
  width: 100%;
  font-size: 1.1rem;
  border-collapse: collapse;
  margin-bottom: 2rem;
  th {
    font-weight: 600;
  }
}
#terms-and-conditions .details table td,
#terms-and-conditions .details table th {
  border: 1px solid #ddd;
  text-align: left;
  padding: 8px;
  padding-left: 2rem;
}
.contactForm {
  input,
  textarea {
    border: 1px solid #219653;
    border-radius: 15px;
  }
}
.locateInfo {
  background-color: #fff7d6;
  background-image: url("/assets/images/svgs/locateInfobg.svg");
  background-position: center;
  background-size: cover;
  border-radius: 30px;
  padding: 50px 0px;

  div.locateDiv {
    text-align: center;
    border-right: 1px solid #219653 !important;
    min-height: 156px;
    &.last {
      border: none !important;
    }
    img {
      margin: 20px 0px;
    }
    p {
      font-size: 18px;
      text-align: center;
      color: #202020;
    }
  }
}
@media only screen and (max-width: 768px) {
  .contactbannerimg {
    width: 80%;
  }
  .locateInfo {
    div.locateDiv {
      border: none !important;
    }
  }
}
</style>
