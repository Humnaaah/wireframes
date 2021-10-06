class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
      header{
        position: fixed;
        top: 0px;
        width: 100%;
        background: #35757e;
        z-index: 999;
        max-height: 80px;
      }
        nav {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
           width: 100%;
      
        }

        nav ul {
          padding: 0;
          margin-top: 20px;
        }
        
        
        nav a {
          font-weight: 550;
          margin: 0 40px;
          color: #0D81E3;
          letter-spacing: 1px;
          text-decoration: none;
          text-transform: uppercase;
          font-family: -webkit-pictograph;
        }
        
       nav a:hover {
          box-shadow: inset 0 -2px 0 0 #fff;
          text-decoration:none;
        }

      </style>
      <header >
        <nav class="navbar navbar-expand-lg navbar-light bg-light" id='navbar'>
        <a class="navbar-brand" href="./"><img src='./Assets/Images/logo-demo.png' id="logo"/></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse navbar-slide offcanvas" id="navbarTogglerDemo01">
              <div class='container'>
              <ul class="navbar-nav mr-auto" >
              <li class="dropdown mega-dropdown active dropdown-toggle"><a href="#" data-toggle="dropdown" >Shop</a>
              <div class="dropdown-menu mega-dropdown-menu">
              <div class='container-fluid'>
                  <div class="row">
                    <div class="col-lg-5">
                      <div class="shop-nav" id="shopNav" >
                      <span> <a id='shopNeed' class="menu-items" href="#Need" role="button" aria-expanded="false" data-target="#Need" aria-controls="Need"  data-toggle="collapse"  onclick="change_need()" > By Need </a> </span>
                          <div class="collapse" id="Need" aria-labelledby="shopNeed" data-parent="#shopNav" >
                            <div class='collapse-body '>
                                <a class='sub-items' href="#" > Sleep </a>
                                <a class='sub-items' href="#" > Mood Support </a>
                                <a class='sub-items' href="#"> Focus </a>
                                <a class='sub-items' href="#"> Beauty </a>
                                <a class='sub-items' href="#"> Pain Management </a>
                                <a class='sub-items' href="#"> Immunity </a>
                                <a class='sub-items' href="#">Digestion </a>
                                <a class='sub-items' href="#"> Pets </a>
                                <a class='sub-items' href="#"> Shop all by Need </a>
                            </div>
                          </div>

                          <span> <a class='menu-items' id='shopCat' href="#categories" role="button" aria-expanded="false" data-target="#categories" aria-controls="categories"  data-toggle="collapse" onclick="change_shop()" > By Category </a> </span>
                          <div class="collapse" id="categories" aria-labelledby="shopCat" data-parent="#shopNav" >
                          <div class='collapse-body'>
                            <a class='sub-items' href="#" > Edibles </a>
                            <a class='sub-items' href="#" > Beverages </a>
                            <a class='sub-items' href="#"> Pills & Supplements </a>
                            <a class='sub-items' href="#"> Driops </a>
                            <a class='sub-items' href="#"> Skincare </a>
                            <a class='sub-items' href="#"> Topicals </a>
                            <a class='sub-items' href="#">Digestion </a>
                            <a class='sub-items' href="#"> Shop all
                            by Category </a>
                            </div>
                          </div>
                          
                          <span> <a id="shopType" class='menu-items' href="#type" role="button" data-target="#type" aria-expanded="false" aria-controls="type"  data-toggle="collapse" onclick="change_shopType()"> By Type </a> </span>
                          <div class="collapse" id="type" aria-labelledby="shopType" data-parent="#shopNav">
                          <div class='collapse-body'>
                            <a class='sub-items' href="#" > CBD </a>
                            <a class='sub-items' href="#" > CBN </a>
                            <a class='sub-items' href="#"> CBG </a>
                            <a class='sub-items' href="#"> Shop all by Type </a>
                            </div>
                          </div>
      
                          <a class='menu-items' href="#"  > By Brand </a> 
                           <a class='menu-items' href="#"  > Shop all CBD </a>
              </div>
                    </div>

                    <div class='col-lg-7 featured-Div'>
                      <div >
                          <div id="shopPage">
                            <h6 class='mainColor' id="txt"> Featured CBD By Need </h6>
                            <hr/>
                              <div class='row'>
                                <div class='col-lg-6'>
                                    <div class='featured-div' >
                                    </div>
                                </div>
                                <div class='col-lg-6'>
                                  <div class='featured-div'>
                                  </div>
                                </div>
                                <div class='col-lg-6'>
                                  <div class='featured-div'>
                                  </div>
                                </div>
                                <div class='col-lg-6'>
                                  <div class='featured-div'>
                                  </div>
                                </div>
                              </div>
                          </div>
                          <div id='typePage'> Type Page </div>
                      </div>
                      </div>


                  </div>
              </div>
          </div>

              </li>
              <li class="dropdown mega-dropdown dropdown-toggle"><a href="#" data-toggle="dropdown" >Locations</a>
                 
              <div class="dropdown-menu mega-dropdown-menu">
              <div class='container-fluid'>
                  <div class="row">
                    <div class="col-lg-5">
                    <div class="side-nav" id="sideNav" >
                    <a class='menu-items' id='glaston' href="#Glastonbury" data-target="#Glastonbury" role="button" aria-expanded="false" aria-controls="Glastonbury"  data-toggle="collapse"> Glastonbury, CT </a>
                         <div class="collapse show" id="Glastonbury" aria-labelledby="glaston" >
                         <div class='collapse-body'>
                           <a class='sub-items' href="#"> Menu </a>
                           <a class='sub-items' id='glastonOrder' href="#Glastonbury-order" role="button" aria-expanded="false" aria-controls="Glastonbury-order"  data-toggle="collapse"> Start an Order </a>
                         </div>
                           </div>
                         <div class="collapse sub-collapse show" id="Glastonbury-order" >
                         <div class='collapse-body'>
                         <span>   <a class='sub-childs' href="#" id="homeNav" onclick="change_salads()"> Bowls & Salads </a> </span>
                         <a class='sub-childs' href="#" onclick="change_beverage()"> Beverages </a>
                         <a class='sub-childs' href="#" onclick="change_snacks()"> Healthy Snacks & Treats </a>
                         <a class='sub-childs' href="#" onclick="change_grab()"> Grab & Go </a>
                         <a class='sub-childs' href="#" onclick="change_baked()"> Baked Goods </a>
                         <a class='sub-childs' href="#" onclick="change_products()"> CBD Products </a>
                       </div>
                       </div>
                      <a  class='menu-items' id='hick' href="#Hickory" role="button" aria-expanded="false" aria-controls="Hickory"  data-toggle="collapse"> Hickory, SC </a> </span>
                         <div class="collapse" id="Hickory"  aria-labelledby="hick" data-parent="#sideNav">
                         <div class='collapse-body'>
                         <a class='sub-items' href="#"> Menu </a>
                         <a class='sub-items' href="#Hickory-order" role="button" aria-expanded="false" aria-controls="Glastonbury-order"  data-toggle="collapse"> Start an Order </a>
                       </div>
                       </div>
     
                     <div class="collapse sub-collapse" id="Hickory-order" >
                     <a class='sub-childs' href="#" id="homeNav" onclick="change_salads()"> Bowls & Salads </a> 
                     <a class='sub-childs' href="#" onclick="change_beverage()"> Beverages </a>
                     <a class='sub-childs' href="#" onclick="change_snacks()"> Healthy Snacks & Treats </a>
                     <a class='sub-childs' href="#" onclick="change_grab()"> Grab & Go </a>
                     <a class='sub-childs' href="#" onclick="change_baked()"> Baked Goods </a>
                     <a class='sub-childs' href="#" onclick="change_products()"> CBD Products </a>
                   </div>
                      <a id="musicNav" href="#" class='menu-items'> View Menu</a> 
                       <a id="photosNav" href="#" class='menu-items'> Catering</a> 
                 </div>
                    </div>

                    <div class='col-lg-7 featured-Div'>
                    <div id="wrapper">
                        <div id="homePage">
                          <h6 class='mainColor' id="demo"> Featured Bowls & Salads </h6>
                          <hr/>
                            <div class='row'>
                              <div class='col-lg-6'>
                                  <div class='featured-div' >
                                  </div>
                              </div>
                              <div class='col-lg-6'>
                                <div class='featured-div'>
                                </div>
                              </div>
                              <div class='col-lg-6'>
                                <div class='featured-div'>
                                </div>
                              </div>
                              <div class='col-lg-6'>
                                <div class='featured-div'>
                                </div>
                              </div>
                            </div>
                        </div>


                      </div>
                    </div>
                  </div>
              </div>
            </div>


              </li>
              <li> <a href="./index.html">  <img  src='./Assets/Images/logo-demo.png' id="logo" class='hiddenLogo'/> </a> </li>
              <li class="dropdown mega-dropdown dropdown-toggle"><a href="#" data-toggle="dropdown">About</a>
              <div class="dropdown-menu mega-dropdown-menu">
              <div class='container-fluid'>
                  <div class="row">
                      <div class='col-lg-5'>
                      <a class='menu-items' href="./Components/About/About Us/index.html" > About Us </a>  
                      <a class='menu-items' href="#""> News & Press </a>  
                      <a class='menu-items' href="#" >Franchise Opps </a>  
                      <a class='menu-items' href="#" > Join the Team
                      </a>  
                      </div>

                   
                      </div>
                    </div>
                  </div>



              
              </li>
              <li><a href="./life.html">Live an incredible life</a></li>
            </ul>
              </div>
          </div>
        </nav>
      </header>


      <div class="modal fade drawer left-align SlideinModals" id="shop" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog wide-modal" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">

          <div class='row'>
            <div class='col-lg-5'>
            <a class='menu-items' href="#" > About Us </a>  
            <a class='menu-items' href="#""> News & Press </a>  
            <a class='menu-items' href="#" >Franchise Opps </a>  
            <a class='menu-items' href="#" > Join the Team
            </a>  
            </div>
           
          </div>
          </div>
        </div>
      </div>
    </div>




      <div class="modal fade drawer left-align SlideinModals" id="locations" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog wide-modal" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">

          <div class='row'>
            <div class='col-lg-5'>
                <div class="side-nav" id="sideNav" >
               <a class='menu-items' href="#Glastonbury" role="button" aria-expanded="false" aria-controls="Glastonbury"  data-toggle="collapse"> Glastonbury, CT </a>
                    <div class="collapse show" id="Glastonbury">
                    <div class='collapse-body'>
                      <a class='sub-items' href="#"> Menu </a>
                      <a class='sub-items' href="#Glastonbury-order" role="button" aria-expanded="false" aria-controls="Glastonbury-order"  data-toggle="collapse"> Start an Order </a>
                    </div>
                      </div>
                    <div class="collapse sub-collapse show" id="Glastonbury-order">
                    <div class='collapse-body'>
                    <span>   <a class='sub-childs' href="#" id="homeNav" onclick="change_salads()"> Bowls & Salads </a> </span>
                    <a class='sub-childs' href="#" onclick="change_beverage()"> Beverages </a>
                    <a class='sub-childs' href="#" onclick="change_snacks()"> Healthy Snacks & Treats </a>
                    <a class='sub-childs' href="#" onclick="change_grab()"> Grab & Go </a>
                    <a class='sub-childs' href="#" onclick="change_baked()"> Baked Goods </a>
                    <a class='sub-childs' href="#" onclick="change_products()"> CBD Products </a>
                  </div>
                  </div>
                 <a  class='menu-items' href="#Hickory" role="button" aria-expanded="false" aria-controls="Hickory"  data-toggle="collapse"> Hickory, SC </a> </span>
                    <div class="collapse " id="Hickory">
                    <div class='collapse-body'>
                    <a class='sub-items' href="#"> Menu </a>
                    <a class='sub-items' href="#Hickory-order" role="button" aria-expanded="false" aria-controls="Glastonbury-order"  data-toggle="collapse"> Start an Order </a>
                  </div>
                  </div>

                <div class="collapse sub-collapse" id="Hickory-order">
                <a class='sub-childs' href="#" id="homeNav" onclick="change_salads()"> Bowls & Salads </a> 
                <a class='sub-childs' href="#" onclick="change_beverage()"> Beverages </a>
                <a class='sub-childs' href="#" onclick="change_snacks()"> Healthy Snacks & Treats </a>
                <a class='sub-childs' href="#" onclick="change_grab()"> Grab & Go </a>
                <a class='sub-childs' href="#" onclick="change_baked()"> Baked Goods </a>
                <a class='sub-childs' href="#" onclick="change_products()"> CBD Products </a>
              </div>
                  <span>  <a id="musicNav" href="#" class='menu-items'> View Menu</a> </span>
                  <span>  <a id="photosNav" href="#" class='menu-items'> Catering</a> </span>
            </div>
            </div>
            <div class='col-lg-7 featured-Div'>
            <div id="wrapper">
                <div id="homePage">
                  <h6 class='mainColor' id="demo"> Featured Bowls & Salads </h6>
                  <hr/>
                    <div class='row'>
                      <div class='col-lg-6'>
                          <div class='featured-div' >
                          </div>
                      </div>
                      <div class='col-lg-6'>
                        <div class='featured-div'>
                        </div>
                      </div>
                      <div class='col-lg-6'>
                        <div class='featured-div'>
                        </div>
                      </div>
                      <div class='col-lg-6'>
                        <div class='featured-div'>
                        </div>
                      </div>
                    </div>
                </div>
              <!--  <div id="biogPage"><p>BIOG PAGE</p></div>
                <div id="musicPage"><p>MUSIC PAGE</p></div>
                <div id="photosPage"><p>PHOTOS PAGE</p></div> -->
            </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>


    <div class="modal fade drawer left-align SlideinModals" id="about" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">

          <div class='row'>
            <div class='col-lg-5'>
                <div  >
               <a class='menu-items' href="#" > About Us </a>  
               <a class='menu-items' href="#""> News & Press </a>  
               <a class='menu-items' href="#" >Franchise Opps </a>  
               <a class='menu-items' href="#" > Join the Team
</a>  
               </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define('header-component', Header);